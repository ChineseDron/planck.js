/*
 * Copyright (c) 2016-2017 Ali Shakiba http://shakiba.me/planck.js
 * Copyright (c) 2006-2011 Erin Catto  http://www.box2d.org
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

DEBUG = typeof DEBUG === 'undefined' ? false : DEBUG;
ASSERT = typeof ASSERT === 'undefined' ? false : ASSERT;

module.exports = Position;

var Vec2 = require('./Vec2');
var Rot = require('./Rot');

/**
 * @prop {Vec2} c location
 * @prop {float} a angle
 */
function Position() {
  this.c = Vec2.zero();
  this.a = 0;
}

Position.prototype.getTransform = function(xf, p) {
  xf.q.set(this.a);
  xf.p.set(Vec2.sub(this.c, Rot.mul(xf.q, p)));
  return xf;
}