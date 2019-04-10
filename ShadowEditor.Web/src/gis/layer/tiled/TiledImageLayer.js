import ImageLayer from '../ImageLayer';

/**
 * 图片瓦片图层
 * @author tengge / https://github.com/tengge1
 */
function TiledImageLayer() {
    ImageLayer.call(this);

    this.tree = rbush();
}

TiledImageLayer.prototype = Object.create(ImageLayer.prototype);
TiledImageLayer.prototype.constructor = TiledImageLayer;

TiledImageLayer.prototype.get = function (aabb) {

};

export default TiledImageLayer;