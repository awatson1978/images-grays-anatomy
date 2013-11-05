Package.describe({
  summary: "Adds image assets from Grays Anatomy to your application."
});


Package.on_use(function (api) {
  api.add_files('bootstrap.images.js', 'server');

  api.add_files('images/grays.anatomy.anchors/AtlasJoint.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/AxillaryGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/BackMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/BladderLymphatics.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/BrainAxial.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/BrainSagittal.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/BrainSulci.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Cecum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/CerebroCortex.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/CircleOfWillis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/CorotidArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/CorpusCallosum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/DuraMater.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/ForeArm.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/HeartAndLungs.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/HipJoint.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Kidneys.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Liver.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Lungs.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/MedulaOblongota.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/OpticChiasma.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/OpticSystem.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Pelvis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Skull.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Stomach.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/Teeth.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/TemperomandibularNerves.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/TorsoNerves.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/VastusLateralis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/VertebralColumn.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.anchors/VertebralNerves.jpg', "client", {isAsset: true});


  api.add_files('images/grays.anatomy.thumbnails/abdominalArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/abdominalArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/abdominalOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteresAndVeinsOfUterus.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesAndVeinsOfNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesAndVeinsOfUpperExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesAndViensOfLowerExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfLowerExtremities1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfLowerExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfTheColon.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfTheHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfTheStomach.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/arteriesOfUpperExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/baseOfSkull.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/bloodcells.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/boneGrowth.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/brain1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/brain2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/brain3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/brain4.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/brain5.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/bridgeOfNose.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/cardiac-system.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/cerabelloCortex1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/chestArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/circleOfWillis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/dental.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/digestiveGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/digestiveSystemArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/digestiveTrack.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ear1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ear2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ear3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ear4.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/earCanalBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/extremetesCartilidge.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/eye1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/eye2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/eye3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/facialOpticArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/feet.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/femaleSexualOrgans.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/femoralStressAngles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/femoralVeinsAndArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/foramenMagnum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/fornix.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/gastricEmbryology.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/generalGlandsOfExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/hands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/headNeckMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/heart1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/heart2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/hipJoint.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/hypothalmus.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/kidneys.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/knee.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/larynx1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/larynx2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lateralFeet.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/legMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/liver.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lowerExtremityBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lungs1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lungs2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lungs3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/lymphNodesOfTheHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/maleSexualOrgans.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/mandible.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/mandibleLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/maxillaryFaceBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/medullaOblongata1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/medullaOblongata2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/musclesOfLowerLeg.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/musclesOfTheHand.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nasalFacialNerves.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/neckArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/neckLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/neckVeinsAndArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nerveDiagram1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nerveDiagram2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nerveOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheFaceAndMandible.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheGut.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheNeck2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfThePelvis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheShoulder.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheTorso.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nervesOfTheUpperExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/nose.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/noseBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/opticRecess.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/opticSystem.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/orbits.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/parotidGlandAndDucts.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/pelvicBone.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/pelvicGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/pharynx.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/prostate.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/rectum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/rib.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ribcage.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ribLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ribMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/ribsLungs.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/scapulaeClavical.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/sexMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/sexualDevelopment.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/sexualDevelopment2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/skin.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/skull.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/skullPlates.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/spinalNerves1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/spinalNerves2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/sternum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/stomachAndSmallIntestines.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/tailbone.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/testes.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/thyroid.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/tongue2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/torsoMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/torsoOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/tosoGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/tounge.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/tympanicDevelopment.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/upperArmMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/upperExtremityBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/veinsOfHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/veinsOfTheNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/vertebrae.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/vertebralVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.thumbnails/vocalCords.jpg', "client", {isAsset: true});


  api.add_files('images/grays.anatomy.tiles/abdominalArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/abdominalArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/abdominalOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteresAndVeinsOfUterus.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesAndVeinsOfNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesAndVeinsOfUpperExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesAndViensOfLowerExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfLowerExtremities1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfLowerExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfTheColon.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfTheHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfTheStomach.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/arteriesOfUpperExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/baseOfSkull.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/bloodcells.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/boneGrowth.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/brain1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/brain2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/brain3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/brain4.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/brain5.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/bridgeOfNose.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/cardiac-system.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/cerabelloCortex1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/chestArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/circleOfWillis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/dental.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/digestiveGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/digestiveSystemArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/digestiveTrack.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ear1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ear2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ear3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ear4.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/earCanalBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/extremetesCartilidge.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/eye1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/eye2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/eye3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/facialOpticArteriesAndVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/feet.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/femaleSexualOrgans.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/femoralStressAngles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/femoralVeinsAndArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/foramenMagnum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/fornix.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/gastricEmbryology.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/generalGlandsOfExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/hands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/headNeckMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/heart1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/heart2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/hipJoint.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/hypothalmus.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/kidneys.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/knee.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/larynx1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/larynx2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lateralFeet.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/legMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/liver.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lowerExtremityBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lungs1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lungs2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lungs3.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/lymphNodesOfTheHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/maleSexualOrgans.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/mandible.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/mandibleLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/maxillaryFaceBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/medullaOblongata1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/medullaOblongata2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/musclesOfLowerLeg.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/musclesOfTheHand.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nasalFacialNerves.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/neckArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/neckLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/neckVeinsAndArteries.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nerveDiagram1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nerveDiagram2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nerveOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheFaceAndMandible.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheGut.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheLowerExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheLowerExtremities2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheNeck2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfThePelvis.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheShoulder.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheTorso.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nervesOfTheUpperExtremities.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/nose.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/noseBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/opticRecess.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/opticSystem.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/orbits.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/parotidGlandAndDucts.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/pelvicBone.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/pelvicGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/pharynx.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/prostate.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/rectum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/rib.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ribcage.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ribLigiments.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ribMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/ribsLungs.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/scapulaeClavical.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/sexMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/sexualDevelopment.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/sexualDevelopment2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/skin.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/skull.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/skullPlates.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/spinalNerves1.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/spinalNerves2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/sternum.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/stomachAndSmallIntestines.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/tailbone.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/testes.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/thyroid.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/tongue2.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/torsoMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/torsoOverview.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/tosoGlands.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/tounge.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/tympanicDevelopment.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/upperArmMuscles.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/upperExtremityBones.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/veinsOfHead.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/veinsOfTheNeck.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/vertebrae.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/vertebralVeins.jpg', "client", {isAsset: true});
  api.add_files('images/grays.anatomy.tiles/vocalCords.jpg', "client", {isAsset: true});
  
});



