function Snake() {
    var me = this;
    this.direction = [1, 0];
    this.body = [
                    [0, 0], [1, 0], [2, 0], [3, 0],
                    [4, 0], [5, 0], [6, 0], [7, 0],
                    [8, 0], [9, 0], [10, 0], [11, 0]
                ];
    setInterval(function() {
        me.move();
    }, 100);
    
    document.body.addEventListener("keydown", function(e) {
        me.turn(e);
    });

    /*
    setInterval(function() {
        var r = Math.floor(Math.random() * 4);
        me.turn({ which: 37+r });
        console.log("turned to the "+r);
    }, 1000);
    */
    this.turn = function(e) {
        // handle left, up, right, down
        if (e.which === 37) {
            this.direction = [-1, 0];    
        }
        else if (e.which === 38) {
            this.direction = [0, -1];
        }   
        else if (e.which === 39) {
            this.direction = [1, 0];
        }
        else if (e.which === 40) {
            this.direction = [0, 1];
        }
            
    };

    this.move = function() {
        if (!this.ateApple()) {
            this.body.shift(); // Make snake shorter
        }
        var headx = this.body[this.body.length-1][0];
        var heady = this.body[this.body.length-1][1];
        var newHeadx = headx + this.direction[0];
        var newHeady = heady + this.direction[1];
        this.body.push([newHeadx, newHeady]); // Add new position
        
        if (this.hitSelf()) {
            this.die();
        }
        // this.hitWall();
        this.render();
    };

    this.hitSelf = function() {
        var len = this.body.length ;
        for(var i = 0; i< len - 1; i++) {
            if(this.body[i][0] === this.body[len-1][0] && 
               this.body[i][1] === this.body[len-1][1]) {
                return true;
            }
        } 
        return false;
        // check if it has run into itself
    };

    this.die = function() {
        console.log("you lose!");
    };

    this.render = function() {
        var pieces = document.getElementsByClassName("snake-piece");
        var bodyLen = this.body.length;
        var i;
        for (i = 0; i < bodyLen; i++) {
            pieces[i].style.left = (this.body[i][0] * 10) + "px";
            pieces[i].style.top = (this.body[i][1] * 10) + "px";
        }

    };

    this.ateApple = function() {
        if(this.body[this.body.length - 1][0] === window.apple.position[0] &&
           this.body[this.body.length - 1][1] === window.apple.position[1]) {
            window.apple.appear();
            return true;
        }
        return false;
    };
}

window.onload = function() {
    window.apple = new Apple();
    window.snake = new Snake();
};
/*
function Board() {
    var wall, i;
    this.length = 100;
    this.width = 100;
    this.walls = [];
    for (i = 0; i < this.width; i++) {
        this.walls.push([i, 0]);
        this.walls.push([i, this.length]);
    }
    for (i = 1; i < this.length - 1; i++) {
        this.walls.push([0, i]);
        this.walls.push([this.width, i]);
    }

    this.checkWall = function(location) {
        var i;
        for (i = 0; i < this.walls.length; i++) {
            if (location[0] === this.walls[i][0] &&
                location[1] === this.walls[i][1]) {
                return true;
            }
        }
        return false;
    };

}
*/
function Apple() {
    // this should have the location of the apple
    // and the method "appear"
    this.position = [10, 10];

    this.render = function() {
        var apple = document.getElementsByClassName("apple")[0];
        apple.style.left = (this.position[0] * 10)+"px";
        apple.style.top = (this.position[1] * 10)+"px";
    };

    this.appear = function() {
        newX = Math.floor(Math.random()*60);
        newY = Math.floor(Math.random()*60);
        this.position = [newX, newY];
        this.render();
    };

    this.appear();
}