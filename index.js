/**
 * Make `obj` configurable.
 *
 * @param {Object} obj
 * @return {Object} the `obj`
 * @api public
 */


function Config(){
  if (!(this instanceof Config)) return new Config();
  this.settings = {};
}

  /**
   * Set config `name` to `val`, or
   * multiple with an object.
   *
   * @param {String|Object} name
   * @param {Mixed} val
   * @return {Object} self
   * @api public
   */

Config.prototype.set = function(name, val){
  if (1 == arguments.length) {
    for (var key in name) {
      this.set(key, name[key]);
    }
  } else {
    this.settings[name] = val;
  }

  return this;
};

/**
 * Get setting `name`.
 *
 * @param {String} name
 * @return {Mixed}
 * @api public
 */

Config.prototype.get = function(name){
  return this.settings[name];
};

/**
 * Enable `name`.
 *
 * @param {String} name
 * @return {Object} self
 * @api public
 */

Config.prototype.enable = function(name){
  return this.set(name, true);
};

/**
 * Disable `name`.
 *
 * @param {String} name
 * @return {Object} self
 * @api public
 */

Config.prototype.disable = function(name){
  return this.set(name, false);
};

/**
 * Check if `name` is enabled.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

Config.prototype.enabled = function(name){
  return !! this.get(name);
};

/**
 * Check if `name` is disabled.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

Config.prototype.disabled = function(name){
  return ! this.get(name);
};

module.exports = new Config();

exports.Config = Config;