AFRAME.registerComponent("wirefence",{
    init:function(){
        var posX = -45;
        var posZ = -30;
        for(var i=0;i<10;i++){
            var wireFence = document.createElement("a-entity");
            var wireFence2 = document.createElement("a-entity");
            var wireFence3 = document.createElement("a-entity");
            var wireFence4 = document.createElement("a-entity");
            wireFence.setAttribute("id","wireFence1"+i);
            wireFence2.setAttribute("id","wireFence2"+i);
            wireFence3.setAttribute("id","wireFence3"+i);
            wireFence4.setAttribute("id","wireFence4"+i);
            posX+=5;
            var posY=2.5;
            var scale = {
                x:2,
                y:2,
                z:2
            };
            wireFence.setAttribute("position",{
                x:posX,
                y:posY,
                z:posZ
            });
            wireFence2.setAttribute("position",{
                x:posZ+40,
                y:posY,
                z:posX+10
            });
            wireFence2.setAttribute("rotation",{
                x:0,
                y:90,
                z:0,
            });
            wireFence3.setAttribute("position",{
                x:posX+5,
                y:posY,
                z:posZ+50
            });
            wireFence4.setAttribute("position",{
                x:posZ-10,
                y:posY,
                z:posX+15
            });
            wireFence4.setAttribute("rotation",{
                x:0,
                y:90,
                z:0,
            });
            wireFence.setAttribute("scale",scale);
            wireFence.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wireFence.setAttribute("static-body",{});
            var sceneEl = document.querySelector("#scene");
            sceneEl.appendChild(wireFence);
            wireFence2.setAttribute("scale",scale);
            wireFence2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wireFence2.setAttribute("static-body",{});
            sceneEl.appendChild(wireFence2);
            wireFence3.setAttribute("scale",scale);
            wireFence3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wireFence3.setAttribute("static-body",{});
            sceneEl.appendChild(wireFence3);
            wireFence4.setAttribute("scale",scale);
            wireFence4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wireFence4.setAttribute("static-body",{});
            sceneEl.appendChild(wireFence4);
        };
    }
});
AFRAME.registerComponent("cajas",{
    schema:{
        height:{height:"number",default:3},
        width:{width:"number",default:3},
        depth:{depth:"number",default:3}
    },
    init:function(){
        var posX= [-6,-18,-27,-14,5,-27,-17,8,-16];
        var posZ= [-4,-22,-14,-12,-5,-27,-19,-21,-16];
        for(var i=0;i<10;i++){
            var box = document.createElement("a-entity");
            
            box.setAttribute("id","box"+i);
            var pX = posX[i];
            var posY= 1.5;
            var pZ = posZ[i];
            box.setAttribute("static-body");
            box.setAttribute("material",{
                src:"../images/boxtexture1.jpg",
                repeat:"1 1 1"
            });
            box.setAttribute("geometry",{
                primitive: "box",
                height:this.data.height,
                width: this.data.width,
                depth:this.data.depth
            });
            box.setAttribute("position",{
                x:pX,
                y:posY,
                z:pZ
            });
            var scene = document.querySelector("#scene");
            scene.appendChild(box);
        }
    }
})