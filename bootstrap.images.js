
Meteor.startup(function () {
  if (Images.find().count() === 0) {

    console.info('No images in collection!  Creating images...');

    console.info(Images.insert({fileName: 'ada', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'AtlasJoint', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'AxillaryGlands', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'BackMuscles', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'BladderLymphatics', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'BrainAxial', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'BrainSagittal', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'BrainSulci', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Cecum', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'CerebroCortex', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'CircleOfWillis', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'CorotidArteries', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'CorpusCallosum', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'DuraMater', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'ForeArm', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'HeartAndLungs', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'HipJoint', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Kidneys', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Liver', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Lungs', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'MedulaOblongota', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'OpticChiasma', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'OpticSystem', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Pelvis', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Skull', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Stomach', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'Teeth', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'TemperomandibularNerves', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'TorsoNerves', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'VastusLateralis', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'VertebralColumn', imageAssetType: 'Anchor' }));
    console.info(Images.insert({fileName: 'VertebralNerves', imageAssetType: 'Anchor' }));


    console.info(Images.insert({fileName: 'abdominalArteries', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'abdominalArteriesAndVeins', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'abdominalOverview', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteresAndVeinsOfUterus', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesAndVeinsOfNeck', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesAndVeinsOfUpperExtremities', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesAndViensOfLowerExtremities', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfLowerExtremities1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfLowerExtremities2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfTheColon', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfTheHead', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfTheStomach', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'arteriesOfUpperExtremities2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'baseOfSkull', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'bloodcells', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'boneGrowth', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'brain1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'brain2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'brain3', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'brain4', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'brain5', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'bridgeOfNose', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'cardiac-system', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'cerabelloCortex1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'chestArteries', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'circleOfWillis', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'dental', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'digestiveGlands', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'digestiveSystemArteriesAndVeins', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'digestiveTrack', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ear1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ear2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ear3', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ear4', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'earCanalBones', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'extremetesCartilidge', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'eye1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'eye2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'eye3', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'facialOpticArteriesAndVeins', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'feet', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'femaleSexualOrgans', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'femoralStressAngles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'femoralVeinsAndArteries', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'foramenMagnum', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'fornix', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'gastricEmbryology', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'generalGlandsOfExtremities', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'hands', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'headNeckMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'heart1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'heart2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'hipJoint', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'hypothalmus', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'kidneys', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'knee', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'larynx1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'larynx2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lateralFeet', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'legMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'liver', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lowerExtremityBones', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lungs1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lungs2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lungs3', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'lymphNodesOfTheHead', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'maleSexualOrgans', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'mandible', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'mandibleLigiments', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'maxillaryFaceBones', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'medullaOblongata1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'medullaOblongata2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'musclesOfLowerLeg', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'musclesOfTheHand', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nasalFacialNerves', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'neckArteries', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'neckLigiments', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'neckVeinsAndArteries', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nerveDiagram1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nerveDiagram2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nerveOverview', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheFaceAndMandible', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheGut', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheLowerExtremities', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheLowerExtremities2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheNeck', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheNeck2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfThePelvis', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheShoulder', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheTorso', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nervesOfTheUpperExtremities', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'nose', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'noseBones', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'opticRecess', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'opticSystem', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'orbits', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'parotidGlandAndDucts', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'pelvicBone', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'pelvicGlands', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'pharynx', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'prostate', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'rectum', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'rib', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ribcage', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ribLigiments', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ribMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'ribsLungs', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'scapulaeClavical', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'sexMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'sexualDevelopment', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'sexualDevelopment2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'skin', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'skull', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'skullPlates', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'spinalNerves1', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'spinalNerves2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'sternum', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'stomachAndSmallIntestines', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'tailbone', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'testes', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'thyroid', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'tongue2', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'torsoMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'torsoOverview', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'tosoGlands', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'tounge', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'tympanicDevelopment', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'upperArmMuscles', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'upperExtremityBones', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'veinsOfHead', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'veinsOfTheNeck', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'vertebrae', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'vertebralVeins', imageAssetType: 'Thumbnail' }));
    console.info(Images.insert({fileName: 'vocalCords', imageAssetType: 'Thumbnail' }));


    console.info(Images.insert({fileName: 'abdominalArteries', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'abdominalArteriesAndVeins', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'abdominalOverview', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteresAndVeinsOfUterus', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesAndVeinsOfNeck', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesAndVeinsOfUpperExtremities', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesAndViensOfLowerExtremities', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfLowerExtremities1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfLowerExtremities2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfTheColon', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfTheHead', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfTheStomach', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'arteriesOfUpperExtremities2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'baseOfSkull', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'bloodcells', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'boneGrowth', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'brain1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'brain2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'brain3', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'brain4', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'brain5', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'bridgeOfNose', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'cardiac-system', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'cerabelloCortex1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'chestArteries', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'circleOfWillis', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'dental', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'digestiveGlands', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'digestiveSystemArteriesAndVeins', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'digestiveTrack', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ear1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ear2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ear3', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ear4', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'earCanalBones', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'extremetesCartilidge', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'eye1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'eye2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'eye3', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'facialOpticArteriesAndVeins', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'feet', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'femaleSexualOrgans', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'femoralStressAngles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'femoralVeinsAndArteries', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'foramenMagnum', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'fornix', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'gastricEmbryology', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'generalGlandsOfExtremities', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'hands', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'headNeckMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'heart1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'heart2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'hipJoint', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'hypothalmus', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'kidneys', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'knee', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'larynx1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'larynx2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lateralFeet', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'legMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'liver', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lowerExtremityBones', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lungs1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lungs2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lungs3', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'lymphNodesOfTheHead', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'maleSexualOrgans', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'mandible', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'mandibleLigiments', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'maxillaryFaceBones', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'medullaOblongata1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'medullaOblongata2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'musclesOfLowerLeg', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'musclesOfTheHand', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nasalFacialNerves', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'neckArteries', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'neckLigiments', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'neckVeinsAndArteries', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nerveDiagram1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nerveDiagram2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nerveOverview', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheFaceAndMandible', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheGut', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheLowerExtremities', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheLowerExtremities2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheNeck', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheNeck2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfThePelvis', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheShoulder', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheTorso', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nervesOfTheUpperExtremities', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'nose', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'noseBones', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'opticRecess', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'opticSystem', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'orbits', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'parotidGlandAndDucts', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'pelvicBone', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'pelvicGlands', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'pharynx', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'prostate', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'rectum', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'rib', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ribcage', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ribLigiments', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ribMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'ribsLungs', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'scapulaeClavical', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'sexMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'sexualDevelopment', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'sexualDevelopment2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'skin', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'skull', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'skullPlates', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'spinalNerves1', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'spinalNerves2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'sternum', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'stomachAndSmallIntestines', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'tailbone', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'testes', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'thyroid', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'tongue2', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'torsoMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'torsoOverview', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'tosoGlands', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'tounge', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'tympanicDevelopment', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'upperArmMuscles', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'upperExtremityBones', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'veinsOfHead', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'veinsOfTheNeck', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'vertebrae', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'vertebralVeins', imageAssetType: 'Tile' }));
    console.info(Images.insert({fileName: 'vocalCords', imageAssetType: 'Tile' }));
  }
});




