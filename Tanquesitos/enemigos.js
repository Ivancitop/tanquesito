AFRAME.registerComponent("enemies",{
    init:function(){
        setInterval(this.shootEnemyBullet,2000);
    },
    shootEnemyBullet:function(){
        var els = document.querySelectorAll(".enemys");
        for(var i=0;i<els.length;i++){
            var bulletE = document.createElement("a-entity");
            bulletE.setAttribute("geometry",{
                primitive:"sphere",
                radius:0.1
            });
            bulletE.setAttribute("material","color","black");
            var position = els[i].getAtributte("position");
            bulletE.setAttribute("position",{
                x:position.x +1.5,
                y:position.y + 2.5,
                z:position.z
            });
            var scene = document.querySelector("#scene");
            scene.appendChild(bulletE);
            var position1=new THREE.Vector3();
            var position2=new THREE.Vector3();
            var enemy = els[i].object3D;
            var player = document.querySelector("#camera").object3D;
            player.getWorldPosition(position1);
            enemy.getWorldPosition(position1);
            //falta establecer velocidad y direccion
            window.addEventListener("collide",{

            });

        }
    }
});