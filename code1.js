gdjs.Scene1Code = {};
gdjs.Scene1Code.GDwhiteObjects1= [];
gdjs.Scene1Code.GDwhiteObjects2= [];
gdjs.Scene1Code.GDb1Objects1= [];
gdjs.Scene1Code.GDb1Objects2= [];
gdjs.Scene1Code.GDb2Objects1= [];
gdjs.Scene1Code.GDb2Objects2= [];
gdjs.Scene1Code.GDb3Objects1= [];
gdjs.Scene1Code.GDb3Objects2= [];
gdjs.Scene1Code.GDb4Objects1= [];
gdjs.Scene1Code.GDb4Objects2= [];
gdjs.Scene1Code.GDditoeduObjects1= [];
gdjs.Scene1Code.GDditoeduObjects2= [];
gdjs.Scene1Code.GDimg0Objects1= [];
gdjs.Scene1Code.GDimg0Objects2= [];
gdjs.Scene1Code.GDimg1Objects1= [];
gdjs.Scene1Code.GDimg1Objects2= [];
gdjs.Scene1Code.GDimg2Objects1= [];
gdjs.Scene1Code.GDimg2Objects2= [];
gdjs.Scene1Code.GDimg3Objects1= [];
gdjs.Scene1Code.GDimg3Objects2= [];
gdjs.Scene1Code.GDimg4Objects1= [];
gdjs.Scene1Code.GDimg4Objects2= [];
gdjs.Scene1Code.GDimg5Objects1= [];
gdjs.Scene1Code.GDimg5Objects2= [];
gdjs.Scene1Code.GDimg6Objects1= [];
gdjs.Scene1Code.GDimg6Objects2= [];
gdjs.Scene1Code.GDimg7Objects1= [];
gdjs.Scene1Code.GDimg7Objects2= [];
gdjs.Scene1Code.GDbutton1Objects1= [];
gdjs.Scene1Code.GDbutton1Objects2= [];
gdjs.Scene1Code.GDtap1Objects1= [];
gdjs.Scene1Code.GDtap1Objects2= [];
gdjs.Scene1Code.GDtap2Objects1= [];
gdjs.Scene1Code.GDtap2Objects2= [];
gdjs.Scene1Code.GDtap3Objects1= [];
gdjs.Scene1Code.GDtap3Objects2= [];
gdjs.Scene1Code.GDtap4Objects1= [];
gdjs.Scene1Code.GDtap4Objects2= [];
gdjs.Scene1Code.GDtap5Objects1= [];
gdjs.Scene1Code.GDtap5Objects2= [];
gdjs.Scene1Code.GDtap6Objects1= [];
gdjs.Scene1Code.GDtap6Objects2= [];
gdjs.Scene1Code.GDtap7Objects1= [];
gdjs.Scene1Code.GDtap7Objects2= [];

gdjs.Scene1Code.conditionTrue_0 = {val:false};
gdjs.Scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Scene1Code.condition1IsTrue_0 = {val:false};
gdjs.Scene1Code.condition2IsTrue_0 = {val:false};


gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene1Code.GDb1Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene1Code.GDb2Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene1Code.GDb3Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene1Code.GDb4Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.Scene1Code.GDbutton1Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap1Objects1Objects = Hashtable.newFrom({"tap1": gdjs.Scene1Code.GDtap1Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap2Objects1Objects = Hashtable.newFrom({"tap2": gdjs.Scene1Code.GDtap2Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap3Objects1Objects = Hashtable.newFrom({"tap3": gdjs.Scene1Code.GDtap3Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap4Objects1Objects = Hashtable.newFrom({"tap4": gdjs.Scene1Code.GDtap4Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap5Objects1Objects = Hashtable.newFrom({"tap5": gdjs.Scene1Code.GDtap5Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap6Objects1Objects = Hashtable.newFrom({"tap6": gdjs.Scene1Code.GDtap6Objects1});
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap7Objects1Objects = Hashtable.newFrom({"tap7": gdjs.Scene1Code.GDtap7Objects1});
gdjs.Scene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1Code.GDimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.Scene1Code.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.Scene1Code.GDimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.Scene1Code.GDimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("img5"), gdjs.Scene1Code.GDimg5Objects1);
gdjs.copyArray(runtimeScene.getObjects("img6"), gdjs.Scene1Code.GDimg6Objects1);
gdjs.copyArray(runtimeScene.getObjects("img7"), gdjs.Scene1Code.GDimg7Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap1"), gdjs.Scene1Code.GDtap1Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1Code.GDtap2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap3"), gdjs.Scene1Code.GDtap3Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap4"), gdjs.Scene1Code.GDtap4Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap5"), gdjs.Scene1Code.GDtap5Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap6"), gdjs.Scene1Code.GDtap6Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap7"), gdjs.Scene1Code.GDtap7Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg7Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap7Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap7Objects1[i].hide();
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene1Code.GDb1Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene1Code.GDb2Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene1Code.GDb3Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene1Code.GDb4Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button1"), gdjs.Scene1Code.GDbutton1Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDbutton1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("img0"), gdjs.Scene1Code.GDimg0Objects1);
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1Code.GDimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap1"), gdjs.Scene1Code.GDtap1Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg0Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg0Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDbutton1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap1Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap1"), gdjs.Scene1Code.GDtap1Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1Code.GDimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.Scene1Code.GDimg2Objects1);
/* Reuse gdjs.Scene1Code.GDtap1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1Code.GDtap2Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap2Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1Code.GDtap2Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.Scene1Code.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.Scene1Code.GDimg3Objects1);
/* Reuse gdjs.Scene1Code.GDtap2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap3"), gdjs.Scene1Code.GDtap3Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap3Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap3"), gdjs.Scene1Code.GDtap3Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.Scene1Code.GDimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.Scene1Code.GDimg4Objects1);
/* Reuse gdjs.Scene1Code.GDtap3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap4"), gdjs.Scene1Code.GDtap4Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap3Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap4Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap4"), gdjs.Scene1Code.GDtap4Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.Scene1Code.GDimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("img5"), gdjs.Scene1Code.GDimg5Objects1);
/* Reuse gdjs.Scene1Code.GDtap4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap5"), gdjs.Scene1Code.GDtap5Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap4Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg5Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap5Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap5"), gdjs.Scene1Code.GDtap5Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img5"), gdjs.Scene1Code.GDimg5Objects1);
gdjs.copyArray(runtimeScene.getObjects("img6"), gdjs.Scene1Code.GDimg6Objects1);
/* Reuse gdjs.Scene1Code.GDtap5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap6"), gdjs.Scene1Code.GDtap6Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap5Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg6Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap6Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap6"), gdjs.Scene1Code.GDtap6Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img6"), gdjs.Scene1Code.GDimg6Objects1);
gdjs.copyArray(runtimeScene.getObjects("img7"), gdjs.Scene1Code.GDimg7Objects1);
/* Reuse gdjs.Scene1Code.GDtap6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap7"), gdjs.Scene1Code.GDtap7Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDimg6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap6Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDimg7Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDimg7Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDtap7Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDtap7Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap7"), gdjs.Scene1Code.GDtap7Objects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDtap7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}}

}


};

gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDwhiteObjects1.length = 0;
gdjs.Scene1Code.GDwhiteObjects2.length = 0;
gdjs.Scene1Code.GDb1Objects1.length = 0;
gdjs.Scene1Code.GDb1Objects2.length = 0;
gdjs.Scene1Code.GDb2Objects1.length = 0;
gdjs.Scene1Code.GDb2Objects2.length = 0;
gdjs.Scene1Code.GDb3Objects1.length = 0;
gdjs.Scene1Code.GDb3Objects2.length = 0;
gdjs.Scene1Code.GDb4Objects1.length = 0;
gdjs.Scene1Code.GDb4Objects2.length = 0;
gdjs.Scene1Code.GDditoeduObjects1.length = 0;
gdjs.Scene1Code.GDditoeduObjects2.length = 0;
gdjs.Scene1Code.GDimg0Objects1.length = 0;
gdjs.Scene1Code.GDimg0Objects2.length = 0;
gdjs.Scene1Code.GDimg1Objects1.length = 0;
gdjs.Scene1Code.GDimg1Objects2.length = 0;
gdjs.Scene1Code.GDimg2Objects1.length = 0;
gdjs.Scene1Code.GDimg2Objects2.length = 0;
gdjs.Scene1Code.GDimg3Objects1.length = 0;
gdjs.Scene1Code.GDimg3Objects2.length = 0;
gdjs.Scene1Code.GDimg4Objects1.length = 0;
gdjs.Scene1Code.GDimg4Objects2.length = 0;
gdjs.Scene1Code.GDimg5Objects1.length = 0;
gdjs.Scene1Code.GDimg5Objects2.length = 0;
gdjs.Scene1Code.GDimg6Objects1.length = 0;
gdjs.Scene1Code.GDimg6Objects2.length = 0;
gdjs.Scene1Code.GDimg7Objects1.length = 0;
gdjs.Scene1Code.GDimg7Objects2.length = 0;
gdjs.Scene1Code.GDbutton1Objects1.length = 0;
gdjs.Scene1Code.GDbutton1Objects2.length = 0;
gdjs.Scene1Code.GDtap1Objects1.length = 0;
gdjs.Scene1Code.GDtap1Objects2.length = 0;
gdjs.Scene1Code.GDtap2Objects1.length = 0;
gdjs.Scene1Code.GDtap2Objects2.length = 0;
gdjs.Scene1Code.GDtap3Objects1.length = 0;
gdjs.Scene1Code.GDtap3Objects2.length = 0;
gdjs.Scene1Code.GDtap4Objects1.length = 0;
gdjs.Scene1Code.GDtap4Objects2.length = 0;
gdjs.Scene1Code.GDtap5Objects1.length = 0;
gdjs.Scene1Code.GDtap5Objects2.length = 0;
gdjs.Scene1Code.GDtap6Objects1.length = 0;
gdjs.Scene1Code.GDtap6Objects2.length = 0;
gdjs.Scene1Code.GDtap7Objects1.length = 0;
gdjs.Scene1Code.GDtap7Objects2.length = 0;

gdjs.Scene1Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene1Code'] = gdjs.Scene1Code;
