export default function boundingRect(coordsList) {
    let result = {};

    if (coordsList.length === 0) return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
//    using [].sort
//    coordsList.sort((a, b) => a.x - b.x);
//    result.left = coordsList[0].x;
//    result.right = coordsList[coordsList.length - 1].x;
//
//    coordsList.sort((a, b) => a.y - b.y);
//    result.bottom = coordsList[0].y;
//    result.top = coordsList[coordsList.length - 1].y;
//    return result;

    coordsList.reduce((a, currentItem) => {
        result.top = (currentItem.y > result.top) ? currentItem.y : result.top || coordsList[0].y;
        result.right = (currentItem.x > result.right) ? currentItem.x : result.right || coordsList[0].x;
        result.bottom = (currentItem.y < result.bottom) ? currentItem.y : result.bottom || coordsList[0].y;
        result.left = (currentItem.x < result.left) ? currentItem.x : result.left || coordsList[0].x;
    },0); 
  return result;
}
