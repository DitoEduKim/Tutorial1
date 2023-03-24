gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1= [];
gdjs.Untitled_32sceneCode.GDBuffArrow1Objects2= [];
gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1= [];
gdjs.Untitled_32sceneCode.GDBuffArrow12Objects2= [];
gdjs.Untitled_32sceneCode.GDCircleMetalObjects1= [];
gdjs.Untitled_32sceneCode.GDCircleMetalObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBuffArrow1Objects1Objects = Hashtable.newFrom({"BuffArrow1": gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBuffArrow12Objects1Objects = Hashtable.newFrom({"BuffArrow12": gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BuffArrow12"), gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1);
gdjs.copyArray(runtimeScene.getObjects("CircleMetal"), gdjs.Untitled_32sceneCode.GDCircleMetalObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCircleMetalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCircleMetalObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuffArrow1"), gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBuffArrow1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("BuffArrow12"), gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuffArrow12"), gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBuffArrow12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CircleMetal"), gdjs.Untitled_32sceneCode.GDCircleMetalObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCircleMetalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCircleMetalObjects1[i].hide(false);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBuffArrow1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBuffArrow1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBuffArrow12Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBuffArrow12Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCircleMetalObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCircleMetalObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
