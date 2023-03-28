gdjs.Scene3Code = {};
gdjs.Scene3Code.GDwhiteObjects1= [];
gdjs.Scene3Code.GDwhiteObjects2= [];
gdjs.Scene3Code.GDb1Objects1= [];
gdjs.Scene3Code.GDb1Objects2= [];
gdjs.Scene3Code.GDb2Objects1= [];
gdjs.Scene3Code.GDb2Objects2= [];
gdjs.Scene3Code.GDb3Objects1= [];
gdjs.Scene3Code.GDb3Objects2= [];
gdjs.Scene3Code.GDb4Objects1= [];
gdjs.Scene3Code.GDb4Objects2= [];
gdjs.Scene3Code.GDditoeduObjects1= [];
gdjs.Scene3Code.GDditoeduObjects2= [];
gdjs.Scene3Code.GDimg14Objects1= [];
gdjs.Scene3Code.GDimg14Objects2= [];
gdjs.Scene3Code.GDimg15Objects1= [];
gdjs.Scene3Code.GDimg15Objects2= [];
gdjs.Scene3Code.GDimg16Objects1= [];
gdjs.Scene3Code.GDimg16Objects2= [];
gdjs.Scene3Code.GDimg17Objects1= [];
gdjs.Scene3Code.GDimg17Objects2= [];
gdjs.Scene3Code.GDimg18Objects1= [];
gdjs.Scene3Code.GDimg18Objects2= [];
gdjs.Scene3Code.GDbutton3Objects1= [];
gdjs.Scene3Code.GDbutton3Objects2= [];
gdjs.Scene3Code.GDtab15Objects1= [];
gdjs.Scene3Code.GDtab15Objects2= [];
gdjs.Scene3Code.GDtab16Objects1= [];
gdjs.Scene3Code.GDtab16Objects2= [];
gdjs.Scene3Code.GDtab17Objects1= [];
gdjs.Scene3Code.GDtab17Objects2= [];
gdjs.Scene3Code.GDbutton4Objects1= [];
gdjs.Scene3Code.GDbutton4Objects2= [];

gdjs.Scene3Code.conditionTrue_0 = {val:false};
gdjs.Scene3Code.condition0IsTrue_0 = {val:false};
gdjs.Scene3Code.condition1IsTrue_0 = {val:false};
gdjs.Scene3Code.condition2IsTrue_0 = {val:false};


gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene3Code.GDb1Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene3Code.GDb2Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene3Code.GDb3Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene3Code.GDb4Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbutton3Objects1Objects = Hashtable.newFrom({"button3": gdjs.Scene3Code.GDbutton3Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab15Objects1Objects = Hashtable.newFrom({"tab15": gdjs.Scene3Code.GDtab15Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab16Objects1Objects = Hashtable.newFrom({"tab16": gdjs.Scene3Code.GDtab16Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab17Objects1Objects = Hashtable.newFrom({"tab17": gdjs.Scene3Code.GDtab17Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbutton4Objects1Objects = Hashtable.newFrom({"button4": gdjs.Scene3Code.GDbutton4Objects1});
gdjs.Scene3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button4"), gdjs.Scene3Code.GDbutton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("img15"), gdjs.Scene3Code.GDimg15Objects1);
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene3Code.GDimg16Objects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene3Code.GDimg17Objects1);
gdjs.copyArray(runtimeScene.getObjects("img18"), gdjs.Scene3Code.GDimg18Objects1);
gdjs.copyArray(runtimeScene.getObjects("tab15"), gdjs.Scene3Code.GDtab15Objects1);
gdjs.copyArray(runtimeScene.getObjects("tab16"), gdjs.Scene3Code.GDtab16Objects1);
gdjs.copyArray(runtimeScene.getObjects("tab17"), gdjs.Scene3Code.GDtab17Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDimg15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg15Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab15Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg16Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab16Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg17Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab17Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg18Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg18Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab15Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab16Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab17Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDbutton4Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDbutton4Objects1[i].hide();
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene3Code.GDb1Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene3Code.GDb2Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene3Code.GDb3Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene3Code.GDb4Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button3"), gdjs.Scene3Code.GDbutton3Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbutton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDbutton3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("img14"), gdjs.Scene3Code.GDimg14Objects1);
gdjs.copyArray(runtimeScene.getObjects("img15"), gdjs.Scene3Code.GDimg15Objects1);
gdjs.copyArray(runtimeScene.getObjects("tab15"), gdjs.Scene3Code.GDtab15Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDimg14Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg14Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDbutton3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Scene3Code.GDimg15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg15Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab15Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tab15"), gdjs.Scene3Code.GDtab15Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab15Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img15"), gdjs.Scene3Code.GDimg15Objects1);
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene3Code.GDimg16Objects1);
/* Reuse gdjs.Scene3Code.GDtab15Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tab16"), gdjs.Scene3Code.GDtab16Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDimg15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg15Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab15Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab15Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg16Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab16Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tab16"), gdjs.Scene3Code.GDtab16Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab16Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene3Code.GDimg16Objects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene3Code.GDimg17Objects1);
/* Reuse gdjs.Scene3Code.GDtab16Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tab17"), gdjs.Scene3Code.GDtab17Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg16Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab16Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab16Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg17Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab17Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tab17"), gdjs.Scene3Code.GDtab17Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDtab17Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button4"), gdjs.Scene3Code.GDbutton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene3Code.GDimg17Objects1);
gdjs.copyArray(runtimeScene.getObjects("img18"), gdjs.Scene3Code.GDimg18Objects1);
/* Reuse gdjs.Scene3Code.GDtab17Objects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg17Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDtab17Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDtab17Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg18Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg18Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDbutton4Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDbutton4Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button4"), gdjs.Scene3Code.GDbutton4Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbutton4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "64c620fd92d7491aafad7944ee44d9666dc6493529fbfff90b72ce2718382813_Cha-Cha Ender.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


};

gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene3Code.GDwhiteObjects1.length = 0;
gdjs.Scene3Code.GDwhiteObjects2.length = 0;
gdjs.Scene3Code.GDb1Objects1.length = 0;
gdjs.Scene3Code.GDb1Objects2.length = 0;
gdjs.Scene3Code.GDb2Objects1.length = 0;
gdjs.Scene3Code.GDb2Objects2.length = 0;
gdjs.Scene3Code.GDb3Objects1.length = 0;
gdjs.Scene3Code.GDb3Objects2.length = 0;
gdjs.Scene3Code.GDb4Objects1.length = 0;
gdjs.Scene3Code.GDb4Objects2.length = 0;
gdjs.Scene3Code.GDditoeduObjects1.length = 0;
gdjs.Scene3Code.GDditoeduObjects2.length = 0;
gdjs.Scene3Code.GDimg14Objects1.length = 0;
gdjs.Scene3Code.GDimg14Objects2.length = 0;
gdjs.Scene3Code.GDimg15Objects1.length = 0;
gdjs.Scene3Code.GDimg15Objects2.length = 0;
gdjs.Scene3Code.GDimg16Objects1.length = 0;
gdjs.Scene3Code.GDimg16Objects2.length = 0;
gdjs.Scene3Code.GDimg17Objects1.length = 0;
gdjs.Scene3Code.GDimg17Objects2.length = 0;
gdjs.Scene3Code.GDimg18Objects1.length = 0;
gdjs.Scene3Code.GDimg18Objects2.length = 0;
gdjs.Scene3Code.GDbutton3Objects1.length = 0;
gdjs.Scene3Code.GDbutton3Objects2.length = 0;
gdjs.Scene3Code.GDtab15Objects1.length = 0;
gdjs.Scene3Code.GDtab15Objects2.length = 0;
gdjs.Scene3Code.GDtab16Objects1.length = 0;
gdjs.Scene3Code.GDtab16Objects2.length = 0;
gdjs.Scene3Code.GDtab17Objects1.length = 0;
gdjs.Scene3Code.GDtab17Objects2.length = 0;
gdjs.Scene3Code.GDbutton4Objects1.length = 0;
gdjs.Scene3Code.GDbutton4Objects2.length = 0;

gdjs.Scene3Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene3Code'] = gdjs.Scene3Code;
