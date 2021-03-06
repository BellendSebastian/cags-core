define([
    'Creature',
    'Direction'
], function (
    Creature,
    Direction
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;

    function Player(position, animationSet) {
        Creature.call(this, position, animationSet);
        this.inventory = [];
        this.speed = 3;
        this.destination = this.position;
        this.direction = Direction.RIGHT;
        this.currentAnimation = this.animationSet.idle.right;
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    Player.prototype.update = function () {
        this.currentAnimation.update();
        this.handleMovement();
    };

    Player.prototype.moveTo = function (point) {
        this.destination = point;
    };

    Player.prototype.handleMovement = function () {
        if (this.position.x !== this.destination.x || this.position.y !== this.destination.y) {
            if (this.position.x > this.destination.x) {
                this.currentAnimation = this.animationSet.walking.left;
                this.direction = Direction.LEFT;
            } else {
                this.currentAnimation = this.animationSet.walking.right;
                this.direction = Direction.RIGHT;
            }
            if (this.position.x > this.destination.x) {
                if (this.position.x - this.destination.x > this.speed) {
                    this.position.x -= this.speed;
                } else {
                    this.position.x = this.destination.x;
                }
            }
            if (this.position.y > this.destination.y) {
                if (this.position.y - this.destination.y > this.speed) {
                    this.position.y -= this.speed;
                } else {
                    this.position.y = this.destination.y;
                }
            }
            if (this.position.x < this.destination.x) {
                if (this.destination.x - this.position.x > this.speed) {
                    this.position.x += this.speed;
                } else {
                    this.position.x = this.destination.x;
                }
            }
            if (this.position.y < this.destination.y) {
                if (this.destination.y - this.position.y > this.speed) {
                    this.position.y += this.speed;
                } else {
                    this.position.y = this.destination.y;
                }
            }
        } else {
            if (this.direction === Direction.LEFT) {
                this.currentAnimation = this.animationSet.idle.left;
            } else {
                this.currentAnimation = this.animationSet.idle.right;
            }
        }
    };

    return Player;
});
