gdjs.homeCode = {};
gdjs.homeCode.GDwhiteObjects1= [];
gdjs.homeCode.GDwhiteObjects2= [];
gdjs.homeCode.GDb1Objects1= [];
gdjs.homeCode.GDb1Objects2= [];
gdjs.homeCode.GDb2Objects1= [];
gdjs.homeCode.GDb2Objects2= [];
gdjs.homeCode.GDb3Objects1= [];
gdjs.homeCode.GDb3Objects2= [];
gdjs.homeCode.GDb4Objects1= [];
gdjs.homeCode.GDb4Objects2= [];
gdjs.homeCode.GDditoeduObjects1= [];
gdjs.homeCode.GDditoeduObjects2= [];
gdjs.homeCode.GDmainObjects1= [];
gdjs.homeCode.GDmainObjects2= [];
gdjs.homeCode.GDStartObjects1= [];
gdjs.homeCode.GDStartObjects2= [];
gdjs.homeCode.GDNewTextObjects1= [];
gdjs.homeCode.GDNewTextObjects2= [];

gdjs.homeCode.conditionTrue_0 = {val:false};
gdjs.homeCode.condition0IsTrue_0 = {val:false};
gdjs.homeCode.condition1IsTrue_0 = {val:false};
gdjs.homeCode.condition2IsTrue_0 = {val:false};


gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.homeCode.GDStartObjects1});
gdjs.homeCode.eventsList0 = function(runtimeScene) {

{


gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.homeCode.GDStartObjects1);

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "7e1d36e129fb15e3f4bfec38fe5338806e72c214363f3cf85defaf925890e0aa_The Celebrated Minuet for Piano.aac", true, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDwhiteObjects1.length = 0;
gdjs.homeCode.GDwhiteObjects2.length = 0;
gdjs.homeCode.GDb1Objects1.length = 0;
gdjs.homeCode.GDb1Objects2.length = 0;
gdjs.homeCode.GDb2Objects1.length = 0;
gdjs.homeCode.GDb2Objects2.length = 0;
gdjs.homeCode.GDb3Objects1.length = 0;
gdjs.homeCode.GDb3Objects2.length = 0;
gdjs.homeCode.GDb4Objects1.length = 0;
gdjs.homeCode.GDb4Objects2.length = 0;
gdjs.homeCode.GDditoeduObjects1.length = 0;
gdjs.homeCode.GDditoeduObjects2.length = 0;
gdjs.homeCode.GDmainObjects1.length = 0;
gdjs.homeCode.GDmainObjects2.length = 0;
gdjs.homeCode.GDStartObjects1.length = 0;
gdjs.homeCode.GDStartObjects2.length = 0;
gdjs.homeCode.GDNewTextObjects1.length = 0;
gdjs.homeCode.GDNewTextObjects2.length = 0;

gdjs.homeCode.eventsList0(runtimeScene);

return;

}

gdjs['homeCode'] = gdjs.homeCode;
