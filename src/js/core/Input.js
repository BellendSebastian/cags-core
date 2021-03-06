define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Input(cursors, renderer, player) {
        this.cursors = cursors;
        this.canvas = renderer.canvas;
        this.player = player;
        this.screen = renderer.screen;
        this.cursorPos = new Point(0, 0);
        this.eventHandlers();
    }

    Input.prototype.eventHandlers = function () {
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this), false);
        this.canvas.addEventListener('mousemove', _.debounce(this.mouseMove.bind(this), 3), false);
    };

    Input.prototype.mouseMove = function (event) {
        this.cursorPos = new Point(event.offsetX, event.offsetY);
    };

    Input.prototype.mouseUp = function (event) {
        if (this.isMoveableLocation(this.screen.floorVerts, event.offsetX, event.offsetY)) {
            this.player.moveTo(new Point(event.offsetX, event.offsetY));
        }
    };

    Input.prototype.isMoveableLocation = function (poly, pointx, pointy) {
        var i, j;
        var inside = false;
        for (i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            if (((poly[i].y > pointy) !== (poly[j].y > pointy)) && (pointx < (poly[j].x - poly[i].x) * (pointy - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x) ) {
                inside = !inside;
            }
        }
        return inside;
    };

    Input.prototype.draw = function (context) {
        var offset = 0;
        if (this.isMoveableLocation(this.screen.floorVerts, this.cursorPos.x, this.cursorPos.y)) {
            offset = 16;
        }
        context.drawImage(this.cursors, offset, 0, 16, 16, this.cursorPos.x - 8, this.cursorPos.y - 8, 16, 16);
    };

    return Input;
});
