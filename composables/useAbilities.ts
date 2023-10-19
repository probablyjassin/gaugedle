const abilities = ref({});
let excluded

export function useAbilities() {

  abilities.value = {
    "AlbedoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Talent_Abiogenesis_Solar_Isotoma.png",
      "CD": "4s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "6.8m",
      "Shape": "Sphere",
      "Element": "Geo",
      "Weapon": "Sword",
      "Blunt": "Yes"
    },
    "AlbedoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Talent_Rite_of_Progeniture_Tectonic_Tide.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "8m, 6m",
      "Shape": "Cone, Sphere",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "AlhaithamSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Talent_Universality_An_Elaboration_on_Form.png",
      "CD": "18s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "11m , 8m , 7m , 4.5m",
      "Shape": " Box, Cylinder, Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "AlhaithamBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/08/Talent_Particular_Field_Fetters_of_Phenomena.png",
      "CD": "18s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "13.6m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "AloySkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Talent_Frozen_Wilds.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "8m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "AloyBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Talent_Prophecies_of_Dawn.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "13m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "AmberSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Talent_Explosive_Puppet.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "6m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "AmberBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Talent_Fiery_Rain.png",
      "CD": "12s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "4m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "AratakiIttoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Talent_Masatsu_Zetsugi_Akaushi_Burst%21.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "AratakiIttoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/50/Talent_Royal_Descent_Behold%2C_Itto_the_Evil%21.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Geo",
      "Blunt": "No"
    },
    "BaizhuSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Talent_Universal_Diagnosis.png",
      "CD": "10s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "1.2m",
      "Shape": "Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "BaizhuBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Talent_Holistic_Revivification.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "3m",
      "Shape": "Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "BarbaraSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Talent_Let_the_Show_Begin%E2%99%AA.png",
      "CD": "32s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "BarbaraBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Talent_Shining_Miracle%E2%99%AA.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "BeidouSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Talent_Tidecaller.png",
      "CD": "7.5s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "16m, 14m, 12m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "Yes"
    },
    "BeidouBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Talent_Stormbreaker.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "4u, 1u",
      "Diameter/Width": "8m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "BennettSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
      "CD": "5s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "5m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "BennettSkillHold1": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
      "CD": "7.5s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "5m, 3m",
      "Shape": "Box, Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "BennettSkillHold2": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m, 4m, 5m",
      "Shape": "Box, Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "BennettBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a2/Talent_Fantastic_Voyage.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "CandaceSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Sacred_Rite_Heron%27s_Sanctum.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Hydro",
      "Blunt": "Yes"
    },
    "CandaceSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Sacred_Rite_Heron%27s_Sanctum.png",
      "CD": "9s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Hydro",
      "Blunt": "Yes"
    },
    "CandaceBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Talent_Sacred_Rite_Wagtail%27s_Tide.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "ChongyunSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Talent_Spirit_Blade_Chonghua%27s_Layered_Frost.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "5m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "ChongyunBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Spirit_Blade_Cloud-Parting_Star.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "ColleiSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Talent_Floral_Brush.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "ColleiBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Talent_Trump-Card_Kitty.png",
      "CD": "15s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "11m, 8m",
      "Shape": "Cylinder, Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "CynoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Talent_Secret_Rite_Chasmic_Soulfarer.png",
      "CD": "3s, 7.5s",
      "ICD": "None, Special",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "Yes"
    },
    "CynoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Talent_Sacred_Rite_Wolf%27s_Swiftness.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Electro",
      "Blunt": "Yes"
    },
    "DehyaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6b/Talent_Molten_Inferno.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m, 10m, 9m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "DehyaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Talent_Leonine_Bite.png",
      "CD": "18s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "13m, 5m",
      "Shape": "Box, Cylinder",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "DilucSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Talent_Searing_Onslaught.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m, 6m, 4.4m",
      "Shape": "Box, Cylinder",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "DilucBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Talent_Dawn.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "2u",
      "Diameter/Width": "16m",
      "Shape": "Box",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "DionaSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Talent_Icy_Paws.png",
      "CD": "6s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "DionaSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Talent_Icy_Paws.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "DionaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Talent_Signature_Mix.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "13m, 6m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "DoriSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Talent_Spirit-Warding_Lamp_Troubleshooter_Cannon.png",
      "CD": "9s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "2m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "DoriBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Talent_Alcazarzaray%27s_Exactitude.png",
      "CD": "20s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Box",
      "Element": "Electro",
      "Blunt": "No"
    },
    "EulaSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Talent_Icetide_Vortex.png",
      "CD": "4s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "EulaSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Talent_Icetide_Vortex.png",
      "CD": "10s",
      "ICD": "None, Standard",
      "Gauge": "1u",
      "Diameter/Width": "11m, 7m",
      "Shape": "Cylinder, Sphere",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "EulaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/af/Talent_Glacial_Illumination.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "16m, 13m",
      "Shape": "Cylinder, Sphere",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "FaruzanSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Talent_Wind_Realm_of_Nasamjnin.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m, 6m",
      "Shape": "Cylinder, Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "FaruzanBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Talent_The_Wind%27s_Secret_Ways.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12.6m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "FischlSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Talent_Nightrider.png",
      "CD": "25s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "4m, 0.2m",
      "Shape": "Box, Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "FischlBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Talent_Midnight_Phantasmagoria.png",
      "CD": "15s",
      "ICD": "Special",
      "Gauge": "2u",
      "Diameter/Width": "1m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "Yes, No"
    },
    "FreminetSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Pressurized_Floe.png",
      "CD": "10s",
      "ICD": "Standard",
      "Gauge": "0u, 1u",
      "Diameter/Width": "3m, 5m, 7m",
      "Shape": "Cylinder Box",
      "Element": "Cryo",
      "Blunt": "Yes, No"
    },
    "FreminetBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Talent_Shadowhunter%27s_Ambush.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "Yes"
    },
    "GanyuSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Talent_Trail_of_the_Qilin.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "8m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "GanyuBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Talent_Celestial_Shower.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "5m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "GorouSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Talent_Inuzaka_All-Round_Defense.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "GorouBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/f9/Talent_Juuga_Forward_Unto_Victory.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m, 7m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "HuTaoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Talent_Guide_to_Afterlife.png",
      "CD": "16s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "HuTaoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Talent_Spirit_Soother.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "JeanSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Talent_Gale_Blade.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "4m",
      "Shape": "Box",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "JeanBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Talent_Dandelion_Breeze.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "KaedeharaKazuhaSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Talent_Chihayaburu.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "KaedeharaKazuhaSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Talent_Chihayaburu.png",
      "CD": "9s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "18m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "KaedeharaKazuhaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/06/Talent_Kazuha_Slash.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u, 1u",
      "Diameter/Width": "18m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "KaeyaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Talent_Frostgnaw.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "4m",
      "Shape": "Box",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "KaeyaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Talent_Glacial_Waltz.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "4m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "KamisatoAyakaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/56/Talent_Kamisato_Art_Hyouka.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "9m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "KamisatoAyakaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Talent_Kamisato_Art_Soumetsu.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m, 6m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "KamisatoAyatoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Kamisato_Art_Kyouka.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "KamisatoAyatoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Talent_Kamisato_Art_Suiyuu.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Cylinder",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "KavehSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Talent_Artistic_Ingenuity.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "KavehBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Talent_Painted_Dome.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "KeqingSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Talent_Stellar_Restoration.png",
      "CD": "7.5s",
      "ICD": "None, Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "6m, 5m, 3.2m",
      "Shape": "Cylinder, Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "KeqingBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Talent_Starward_Sword.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "16m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "KiraraSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Talent_Meow-teor_Kick.png",
      "CD": "8s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "5m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "KiraraSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Talent_Meow-teor_Kick.png",
      "CD": "12s",
      "ICD": "None, Standard",
      "Gauge": "1u",
      "Diameter/Width": "5.2m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "KiraraBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a1/Talent_Secret_Art_Surprise_Dispatch.png",
      "CD": "15s",
      "ICD": "None, Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "13m, 4m",
      "Shape": "Cylinder, Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "KleeSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Talent_Jumpy_Dumpty.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "8m, 4m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "Yes, No"
    },
    "KleeBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Talent_Sparks_%27n%27_Splash.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "3m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "KujouSaraSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Talent_Tengu_Stormcall.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "KujouSaraBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Talent_Subjugation_Koukou_Sendou.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "12m, 6m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "KukiShinobuSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Talent_Sanctifying_Ring.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "8m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "Yes, No"
    },
    "KukiShinobuBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Talent_Gyoei_Narukami_Kariyama_Rite.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "8m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "LaylaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Talent_Nights_of_Formal_Focus.png",
      "CD": "12s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "5m, 1.6m",
      "Shape": "Cylinder, Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "LaylaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Talent_Dream_of_the_Star-Stream_Shaker.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "3m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "LisaSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Talent_Violet_Arc.png",
      "CD": "1s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "2m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "LisaSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Talent_Violet_Arc.png",
      "CD": "16s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "20m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "LisaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Talent_Lightning_Rose.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u, 0u",
      "Diameter/Width": "14m, 2m",
      "Shape": "Cylinder, Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "LynetteSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Talent_Enigmatic_Feint.png",
      "CD": "12",
      "ICD": "None",
      "Gauge": "0u, 1u",
      "Diameter/Width": "1.8, 1.2",
      "Shape": "Box",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "LynetteBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Talent_Magic_Trick_Astonishing_Shift.png",
      "CD": "18s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "4.5m, 4.6m, 1m",
      "Shape": "Cylinder, Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "LyneySkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Talent_Bewildering_Lights.png",
      "CD": "15s",
      "ICD": "Special, None",
      "Gauge": "1u",
      "Diameter/Width": "7m, 11m",
      "Shape": "Cylinder, Sphere",
      "Element": "Pyro",
      "Blunt": "Yes, No"
    },
    "LyneyBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/df/Talent_Wondrous_Trick_Miracle_Parade.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "MikaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Talent_Starfrost_Swirl.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "2.5m, 0.3m, 0.2m",
      "Shape": "Box",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "MikaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Talent_Skyfeather_Song.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "MonaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/45/Talent_Mirror_Reflection_of_Doom.png",
      "CD": "12s",
      "ICD": "None, Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "MonaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Talent_Stellaris_Phantasm.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "20m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "NahidaSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Talent_All_Schemes_to_Know.png",
      "CD": "5s",
      "ICD": "Special",
      "Gauge": "1.5u, 1u",
      "Diameter/Width": "9.2m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "NahidaSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Talent_All_Schemes_to_Know.png",
      "CD": "6s",
      "ICD": "Special, None",
      "Gauge": "1.5u, 1u",
      "Diameter/Width": "Big",
      "Shape": "Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "NahidaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Talent_Illusory_Heart.png",
      "CD": "13.5s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "NilouSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Talent_Dance_of_Haftkarsvar.png",
      "CD": "18s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "5.4m, 5m, 3.6m, 2.7m, 1.75m",
      "Shape": "Box, Cylinder",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "NilouBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Talent_Dance_of_Abzendegi_Distant_Dreams%2C_Listening_Spring.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "NingguangSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Talent_Jade_Screen.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "NingguangBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Talent_Starshatter.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Sphere",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "NoelleSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Talent_Breastplate.png",
      "CD": "24s",
      "ICD": "Standard",
      "Gauge": "2u",
      "Diameter/Width": "4m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "NoelleBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/7c/Talent_Sweeping_Time.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "13m, 8m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "QiqiSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Talent_Adeptus_Art_Herald_of_Frost.png",
      "CD": "30s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "5m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "QiqiBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/7c/Talent_Adeptus_Art_Preserver_of_Fortune.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "14m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "RaidenShogunSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Talent_Transcendence_Baleful_Omen.png",
      "CD": "10s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m, 8m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "No"
    },
    "RaidenShogunBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Talent_Secret_Art_Musou_Shinsetsu.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "13m",
      "Shape": "Box",
      "Element": "Electro",
      "Blunt": "No"
    },
    "RazorSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/06/Talent_Claw_and_Thunder.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "4.8m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "RazorSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/06/Talent_Claw_and_Thunder.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "10m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "Yes"
    },
    "RazorBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Talent_Lightning_Fang.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "10m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "Yes, No"
    },
    "RosariaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Talent_Ravaging_Confession.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "5.6m, 2m",
      "Shape": "Box, Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "RosariaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Talent_Rites_of_Termination.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "13m, 12m, 7m",
      "Shape": "Cylinder",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "SangonomiyaKokomiSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Talent_Kurage%27s_Oath.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "SangonomiyaKokomiBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Talent_Nereid%27s_Ascension.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "10m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "SayuSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Talent_Yoohoo_Art_Fuuin_Dash.png",
      "CD": "6s-11s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "5m, 6m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "SayuBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Talent_Yoohoo_Art_Mujina_Flurry.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "9m, 7m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "ShenheSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Talent_Spring_Spirit_Summoning.png",
      "CD": "10s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "ShenheSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Talent_Spring_Spirit_Summoning.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "8m",
      "Shape": "Sphere",
      "Element": "Cryo",
      "Blunt": "No"
    },
    "ShenheBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Talent_Divine_Maiden%27s_Deliverance.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "14m, 8m",
      "Shape": "Cone, Cylinder",
      "Element": "Cryo",
      "Blunt": "Yes, No"
    },
    "ShikanoinHeizouSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Talent_Heartstopper_Strike.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "4m, 3m",
      "Shape": "Box",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "ShikanoinHeizouBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Talent_Windmuster_Kick.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m, 5m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "SucroseSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Talent_Astable_Anemohypostasis_Creation_-_6308.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "SucroseBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Talent_Forbidden_Creation_-_Isomer_75_Type_II.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "TartagliaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Talent_Foul_Legacy_Raging_Tide.png",
      "CD": "6s-36s, 45s",
      "ICD": "None",
      "Gauge": "2u, 1u",
      "Diameter/Width": "6m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "Yes, No"
    },
    "TartagliaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Talent_Havoc_Obliteration.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "16m, 12m, 10m",
      "Shape": "Cylinder, Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "ThomaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Talent_Blazing_Blessing.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "ThomaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e4/Talent_Crimson_Ooyoroi.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "8m, 4.5m",
      "Shape": "Box, Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "TighnariSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/f9/Talent_Vijnana-Phala_Mine.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "TighnariBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/30/Talent_Fashioner%27s_Tanglevine_Shaft.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "2m",
      "Shape": "Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "AnemoTravelerSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Talent_Palm_Vortex.png",
      "CD": "5s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cone",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "AnemoTravelerSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Talent_Palm_Vortex.png",
      "CD": "8s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cone",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "AnemoTravelerBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Talent_Gust_Surge.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "3m, 2.5m",
      "Shape": "Box",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "DendroTravelerSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Talent_Razorgrass_Blade.png",
      "CD": "8s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6.5m",
      "Shape": "Cone",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "DendroTravelerBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/af/Talent_Surgent_Manifestation.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "13m, 8m, 4m",
      "Shape": "Cylinder",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "ElectroTravelerSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Talent_Lightning_Blade.png",
      "CD": "13.5s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Electro",
      "Blunt": "No"
    },
    "ElectroTravelerBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Talent_Bellowing_Thunder.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m, 4m",
      "Shape": "Sphere",
      "Element": "Electro",
      "Blunt": "Yes, No"
    },
    "GeoTravelerSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Talent_Starfell_Sword.png",
      "CD": "8s",
      "ICD": "Standard",
      "Gauge": "2u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "GeoTravelerBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Talent_Wake_of_Earth.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "HydroTravelerSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Talent_Aquacrest_Saber.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "0u, 1u",
      "Diameter/Width": "1.2m",
      "Shape": "Box",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "HydroTravelerSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Talent_Aquacrest_Saber.png",
      "CD": "10s",
      "ICD": "Special, None",
      "Gauge": "0u, 1u",
      "Diameter/Width": "1.2m, 1.3m",
      "Shape": "Box",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "HydroTravelerBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/65/Talent_Rising_Waters.png",
      "CD": "20s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "VentiSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Talent_Skyward_Sonnet.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "6m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "VentiSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Talent_Skyward_Sonnet.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "VentiBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Talent_Wind%27s_Grand_Ode.png",
      "CD": "15s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "12m, 8m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "WandererSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Talent_Hanega_Song_of_the_Wind.png",
      "CD": "6s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "WandererBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Talent_Kyougen_Five_Ceremonial_Plays.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "10m",
      "Shape": "Cylinder",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "XianglingSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Talent_Guoba_Attack.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "5m",
      "Shape": "Cone",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "XianglingBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Talent_Pyronado.png",
      "CD": "20s",
      "ICD": "Standard, None",
      "Gauge": "1u",
      "Diameter/Width": "5m, 6m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "XiaoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/da/Talent_Lemniscatic_Wind_Cycling.png",
      "CD": "10s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "1.6m",
      "Shape": "Sphere",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "XiaoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Talent_Bane_of_All_Evil.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Anemo",
      "Blunt": "No"
    },
    "XingqiuSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Guhua_Sword_Fatal_Rainscreen.png",
      "CD": "21s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m, 3.5m",
      "Shape": "Box, Cylinder",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "XingqiuBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Talent_Guhua_Sword_Raincutter.png",
      "CD": "20s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "XinyanSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Talent_Sweeping_Fervor.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "6m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "Yes, No"
    },
    "XinyanBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/06/Talent_Riff_Revolution.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "8m, 6m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "YaeMikoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Yakan_Evocation_Sesshou_Sakura.png",
      "CD": "4s",
      "ICD": "Standard",
      "Gauge": "1u",
      "Diameter/Width": "1m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "YaeMikoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Great_Secret_Art_Tenko_Kenshin.png",
      "CD": "22s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "14m",
      "Shape": "Cylinder",
      "Element": "Electro",
      "Blunt": "No"
    },
    "YanfeiSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Talent_Signed_Edict.png",
      "CD": "9s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "7m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "YanfeiBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/96/Talent_Done_Deal.png",
      "CD": "20s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "13m",
      "Shape": "Cylinder",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "YaoyaoSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/25/Talent_Raphanus_Sky_Cluster.png",
      "CD": "15s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "4m",
      "Shape": "Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "YaoyaoBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Talent_Moonjade_Descent.png",
      "CD": "20s",
      "ICD": "Special",
      "Gauge": "1u",
      "Diameter/Width": "6m, 4m",
      "Shape": "Cylinder, Sphere",
      "Element": "Dendro",
      "Blunt": "No"
    },
    "YelanSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/59/Talent_Lingering_Lifeline.png",
      "CD": "10s",
      "ICD": "None",
      "Gauge": "1u",
      "Diameter/Width": "???",
      "Shape": "???",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "YelanBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Talent_Depth-Clarion_Dice.png",
      "CD": "18s",
      "ICD": "Special",
      "Gauge": "2u, 1u",
      "Diameter/Width": "12m, 1m",
      "Shape": "Cylinder, Sphere",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "YoimiyaSkill": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Talent_Niwabi_Fire-Dance.png",
      "CD": "18s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Pyro",
      "Blunt": "No"
    },
    "YoimiyaBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Talent_Ryuukin_Saxifrage.png",
      "CD": "15s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "12m, 6m",
      "Shape": "Sphere",
      "Element": "Pyro",
      "Blunt": "Yes"
    },
    "YunJinSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Talent_Opening_Flourish.png",
      "CD": "9s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "8m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "No"
    },
    "YunJinSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Talent_Opening_Flourish.png",
      "CD": "9s",
      "ICD": "None",
      "Gauge": "4u, 2u",
      "Diameter/Width": "16m, 12m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "No"
    },
    "YunJinBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/59/Talent_Cliffbreaker%27s_Banner.png",
      "CD": "15s",
      "ICD": "None",
      "Gauge": "2u",
      "Diameter/Width": "12m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "ZhongliSkillPress": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Dominus_Lapidis.png",
      "CD": "4s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "8m, 4m",
      "Shape": "Box, Sphere",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "ZhongliSkillHold": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Dominus_Lapidis.png",
      "CD": "12s",
      "ICD": "Standard",
      "Gauge": "2u, 1u",
      "Diameter/Width": "20m, 8m",
      "Shape": "Box, Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "ZhongliBurst": {
      "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Talent_Planet_Befall.png",
      "CD": "12s",
      "ICD": "None",
      "Gauge": "4u",
      "Diameter/Width": "15m",
      "Shape": "Cylinder",
      "Element": "Geo",
      "Blunt": "Yes"
    },
    "FOCALORSSkill": {
      "Image": "https://cdn.7tv.app/emote/63e925494c6d6cdd17430958/4x.webp",
      "CD": "10s",
      "ICD": "Special",
      "Gauge": "1u, 1.5u",
      "Diameter/Width": "9m",
      "Shape": "Cylinder",
      "Element": "Hydro",
      "Blunt": "No"
    },
    "FOCALORSBurst": {
      "Image": "https://cdn.7tv.app/emote/63e925494c6d6cdd17430958/4x.webp",
      "CD": "13.5s",
      "ICD": "None",
      "Gauge": "None",
      "Diameter/Width": "None",
      "Shape": "None",
      "Element": "Hydro",
      "Blunt": "No"
    }
  }

  return {
    abilities,
  };
}
