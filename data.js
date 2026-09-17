var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.2562672165198947,
          "pitch": 0.5919213788873048,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.4484307380791535,
          "pitch": 0.8403622939872282,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -1.4969538953024841,
          "pitch": 0.5249683468293149,
          "rotation": 0,
          "target": "2-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.980604156602479,
          "pitch": 0.8933384343600341,
          "rotation": 5.497787143782138,
          "target": "1-living-1"
        },
        {
          "yaw": -1.2795030474833027,
          "pitch": 0.910173553693566,
          "rotation": 0,
          "target": "5-dining-1"
        },
        {
          "yaw": 0.8226688198407643,
          "pitch": 0.8621786541904086,
          "rotation": 7.853981633974483,
          "target": "14-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-family-living-1",
      "name": "FAMILY LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1340548018172374,
        "pitch": 0.005002071055434598,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.796340437196477,
          "pitch": 1.1912790350790203,
          "rotation": 0,
          "target": "3-family-living-1"
        },
        {
          "yaw": 1.9054896623850164,
          "pitch": 0.7660209077925249,
          "rotation": 0,
          "target": "17-kitchen-1"
        },
        {
          "yaw": -0.0014674710324236173,
          "pitch": 0.9766129763293154,
          "rotation": 0,
          "target": "5-dining-1"
        },
        {
          "yaw": 0.8118023741059801,
          "pitch": 0.6004626203598331,
          "rotation": 0.7853981633974483,
          "target": "7-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-family-living-2",
      "name": "FAMILY LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2457347108286765,
          "pitch": 0.6937724446322129,
          "rotation": 0,
          "target": "5-dining-1"
        },
        {
          "yaw": 2.3216418198388524,
          "pitch": 1.1180025803736964,
          "rotation": 0.7853981633974483,
          "target": "17-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8255504415049195,
          "pitch": 0.582580172897396,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": 1.8791598408357952,
          "pitch": 0.8142697707672646,
          "rotation": 0,
          "target": "2-wash-area"
        },
        {
          "yaw": -0.42769292881312104,
          "pitch": 0.7994123310019656,
          "rotation": 0,
          "target": "6-dining-2"
        },
        {
          "yaw": 2.7322636002754566,
          "pitch": 0.8557908934133351,
          "rotation": 0,
          "target": "14-bedroom-2"
        },
        {
          "yaw": 0.49918648147882827,
          "pitch": 0.4699274835080498,
          "rotation": 1.5707963267948966,
          "target": "3-family-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10065440854771168,
          "pitch": 0.8683656795877113,
          "rotation": 0,
          "target": "5-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stair-area",
      "name": "STAIR AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.005251005657369134,
        "pitch": 0.0034489619694042517,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.8090259653365663,
          "pitch": 0.8613452310747594,
          "rotation": 0,
          "target": "3-family-living-1"
        },
        {
          "yaw": 0.8089273322157045,
          "pitch": 0.6290263125768778,
          "rotation": 0,
          "target": "17-kitchen-1"
        },
        {
          "yaw": -0.5218023754817942,
          "pitch": 0.5568353325597606,
          "rotation": 0,
          "target": "8-ablution-area"
        },
        {
          "yaw": -2.949701180905386,
          "pitch": 0.9598350314151851,
          "rotation": 0,
          "target": "5-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ablution-area",
      "name": "ABLUTION AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.16428370620526422,
          "pitch": 0.5794496939979155,
          "rotation": 0,
          "target": "9-prayer-room-1"
        },
        {
          "yaw": -1.5458644792153748,
          "pitch": 0.6796311770087922,
          "rotation": 0,
          "target": "7-stair-area"
        },
        {
          "yaw": 0.2818845229680882,
          "pitch": 0.6346992747657332,
          "rotation": 7.0685834705770345,
          "target": "11-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-prayer-room-1",
      "name": "PRAYER ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.0644905703557086,
          "pitch": 0.7411965122339641,
          "rotation": 0,
          "target": "10-prayer-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-prayer-room-2",
      "name": "PRAYER ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11182585023937541,
          "pitch": 0.6802967539231908,
          "rotation": 0,
          "target": "8-ablution-area"
        },
        {
          "yaw": 3.0141974371558433,
          "pitch": 1.2450616917921948,
          "rotation": 0,
          "target": "9-prayer-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.3729324177625486,
          "pitch": 0.6949060711291857,
          "rotation": 0,
          "target": "12-bedroom-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-11",
      "name": "BEDROOM 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.8761331247573345,
          "pitch": 0.7083549943299481,
          "rotation": 0,
          "target": "13-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.07314842002173627,
          "pitch": 0.30468627010238336,
          "rotation": 0,
          "target": "8-ablution-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": -0.005506646941043414,
        "fov": 0.9788064937700273
      },
      "linkHotspots": [
        {
          "yaw": 0.003068960038905999,
          "pitch": 0.5766945680247098,
          "rotation": 0,
          "target": "15-bedroom-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-21",
      "name": "BEDROOM 2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.5056241845072442,
          "pitch": 0.8454536708860765,
          "rotation": 0,
          "target": "16-bedroom-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-22",
      "name": "BEDROOM 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6770850730011304,
          "pitch": 0.4328724685294745,
          "rotation": 0,
          "target": "2-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.13899439759877552,
          "pitch": 0.5692811861806781,
          "rotation": 0,
          "target": "18-kitchen-2"
        },
        {
          "yaw": 1.3131873219655361,
          "pitch": 0.7149185104277986,
          "rotation": 0,
          "target": "3-family-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0016757881164224386,
        "pitch": -0.0012553618641568676,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.1638033082589896,
          "pitch": 0.9788335760576174,
          "rotation": 8.63937979737193,
          "target": "17-kitchen-1"
        },
        {
          "yaw": -0.5333208480088203,
          "pitch": 0.4075279458850716,
          "rotation": 0,
          "target": "19-work-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-work-area-1",
      "name": "WORK AREA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.06430807692542473,
          "pitch": 0.4766220129695107,
          "rotation": 0,
          "target": "20-work-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-work-area-2",
      "name": "WORK AREA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.27693093280104897,
          "pitch": 0.545269347723476,
          "rotation": 4.71238898038469,
          "target": "18-kitchen-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NOUSHAD INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
