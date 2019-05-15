// Or with jQuery


(function ($) {

    var Renderer = function (canvas) {
        var canvas = $(canvas).get(0)
        var ctx = canvas.getContext("2d");
        var particleSystem

        var that = {
            init: function (system) {
                //
                // the particle system will call the init function once, right before the
                // first frame is to be drawn. it's a good place to set up the canvas and
                // to pass the canvas size to the particle system
                //
                // save a reference to the particle system for use in the .redraw() loop
                particleSystem = system

                // inform the system of the screen dimensions so it can map coords for us.
                // if the canvas is ever resized, screenSize should be called again with
                // the new dimensions
                particleSystem.screenSize(canvas.width, canvas.height)
                particleSystem.screenPadding(150) // leave an extra 80px of whitespace per side

                // set up some event handlers to allow for node-dragging
                that.initMouseHandling()
            },

            redraw: function () {
                // 
                // redraw will be called repeatedly during the run whenever the node positions
                // change. the new positions for the nodes can be accessed by looking at the
                // .p attribute of a given node. however the p.x & p.y values are in the coordinates
                // of the particle system rather than the screen. you can either map them to
                // the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
                // which allow you to step through the actual node objects but also pass an
                // x,y point in the screen's coordinate system
                // 
                ctx.fillStyle = "white"
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                particleSystem.eachEdge(function (edge, pt1, pt2) {

                    ctx.strokeStyle = "rgba(35,35,35, 0.88)";
                    ctx.lineWidth = 4;
                    if (pt1 == pt2) {
                        ctx.beginPath();
                        ctx.arc(pt1.x, pt1.y, 75, 0, 1.5 * Math.PI);
                        ctx.stroke();

                    } else {
                        ctx.beginPath();
                        ctx.moveTo(pt1.x, pt1.y);
                        ctx.lineTo(pt2.x, pt2.y);
                        ctx.stroke();

                        ctx.fillStyle = "blue";
                        ctx.font = 'bold 20px sans-serif';
                        ctx.fillText(edge.data.name, (pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2);
                    }


                });

                particleSystem.eachNode(function (node, pt) {
                    // node: {mass:#, p:{x,y}, name:"", data:{}}
                    // pt:   {x:#, y:#}  node position in screen coords

                    // draw a rectangle centered at pt
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 25, 0, 2 * Math.PI);
                    ctx.strokeStyle = "black"
                    ctx.fillStyle = (node.data.color) || "grey";
                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.font = 'italic 20px sans-serif';
                    ctx.fillStyle = "white";
                    ctx.fillText(node.data.name, pt.x, pt.y);

                })

            },

            initMouseHandling: function () {
                // no-nonsense drag and drop (thanks springy.js)
                var dragged = null;

                // set up a handler object that will initially listen for mousedowns then
                // for moves and mouseups while dragging
                var handler = {
                    clicked: function (e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null) {
                            // while we're dragging, don't let physics move the node
                            dragged.node.fixed = true
                        }

                        $(canvas).bind('mousemove', handler.dragged)
                        $(window).bind('mouseup', handler.dropped)

                        return false
                    },
                    dragged: function (e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)

                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s)
                            dragged.node.p = p
                        }

                        return false
                    },

                    dropped: function (e) {
                        if (dragged === null || dragged.node === undefined) return
                        if (dragged.node !== null) dragged.node.fixed = false
                        dragged.node.tempMass = 1
                        dragged = null
                        $(canvas).unbind('mousemove', handler.dragged)
                        $(window).unbind('mouseup', handler.dropped)
                        _mouseP = null
                        return false
                    }
                }

                // start listening
                $(canvas).mousedown(handler.clicked);

            },
        }
        return that
    }

    $(document).ready(function () {
        $('.fixed-action-btn').floatingActionButton();

        var sys = arbor.ParticleSystem(0, 500, 0, false) // create the system with sensible repulsion/stiffness/friction
        sys.parameters({
            gravity: false
        }) // use center-gravity to make the graph settle nicely (ymmv)
        sys.renderer = Renderer("#viewport") // our newly created renderer will have its .init() method called shortly by sys...

        sys.addNode('a', { name: 'a', color: 'black' })
        // add some nodes to the graph and watch it go...
        sys.addEdge('a', 'b', { name: "1", })
        sys.addEdge('a', 'c', { name: "1", })
        sys.addEdge('a', 'd', { name: "1", })
        sys.addEdge('a', 'a', { name: "1", })
        // or, equivalently:
        //
        // sys.graft({
        //   nodes:{
        //     f:{alone:true, mass:.25}
        //   }, 
        //   edges:{
        //     a:{ b:{},
        //         c:{},
        //         d:{},
        //         e:{}
        //     }
        //   }
        // })
        $("#newnode").click(function () {
            sys.addNode(String.fromCharCode((Math.floor(Math.random() * 26)) + 97));
            sys.addEdge(String.fromCharCode((Math.floor(Math.random() * 26)) + 97), String.fromCharCode((Math.floor(Math.random() * 26)) + 97))
        });

    })



})(this.jQuery)