"use strict";
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
