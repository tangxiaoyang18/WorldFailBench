window.BENCHMARK_RESULTS = {
  "platform": "RoboTwin",
  "tables": {
    "TFE": 3,
    "SFE": 4,
    "successRateCorrelation": 5,
    "SPC": 5,
    "boundary": 6,
    "TPC": 15
  },
  "notes": {
    "TFE": "Mean weights five policies equally; each policy averages tasks. Lower is better.",
    "SFE": "Mean averages policies within task, then tasks. Lower is better. Range 0–2.",
    "TPC": "Overall Mean averages defined type correlations within tasks, then tasks equally. Higher is better.",
    "SPC": "Mean defined stage correlations within task then tasks. Five policies. Higher is better.",
    "boundary": "OA/GE reported separately per scene factor. Scores average settings within each factor. No overall aggregate published; do not label arithmetic mean as paper score."
  },
  "rows": [
    {
      "model": "Ref–Ref",
      "fullName": "Ref–Ref",
      "isBaseline": true,
      "TFE": 0.061,
      "SFE": 0.094,
      "TPC": 0.814,
      "SPC": 0.903,
      "successRateCorrelation": 0.942,
      "boundary": {
        "position": {
          "OA": 1,
          "GE": 0.005
        },
        "orientation": {
          "OA": 0.95,
          "GE": 0.01
        },
        "size": {
          "OA": 1,
          "GE": 0.02
        }
      }
    },
    {
      "model": "A2World",
      "fullName": "A2World",
      "isBaseline": false,
      "TFE": 0.211,
      "SFE": 0.783,
      "TPC": 0.134,
      "SPC": -0.061,
      "successRateCorrelation": 0.043,
      "boundary": {
        "position": {
          "OA": 0.685,
          "GE": 0.515
        },
        "orientation": {
          "OA": 0.41,
          "GE": 0.619
        },
        "size": {
          "OA": 0.455,
          "GE": 0.576
        }
      }
    },
    {
      "model": "BWM",
      "fullName": "BWM",
      "isBaseline": false,
      "TFE": 0.236,
      "SFE": 0.751,
      "TPC": 0.011,
      "SPC": 0.045,
      "successRateCorrelation": 0.039,
      "boundary": {
        "position": {
          "OA": 0.685,
          "GE": 0.529
        },
        "orientation": {
          "OA": 0.256,
          "GE": 0.614
        },
        "size": {
          "OA": 0.364,
          "GE": 0.589
        }
      }
    },
    {
      "model": "Cosmos",
      "fullName": "Cosmos-Predict-2.5",
      "isBaseline": false,
      "TFE": 0.335,
      "SFE": 0.817,
      "TPC": 0.023,
      "SPC": -0.046,
      "successRateCorrelation": -0.083,
      "boundary": {
        "position": {
          "OA": 0.583,
          "GE": 0.587
        },
        "orientation": {
          "OA": 0.321,
          "GE": 0.617
        },
        "size": {
          "OA": 0.394,
          "GE": 0.648
        }
      }
    },
    {
      "model": "Ctrl",
      "fullName": "Ctrl-World",
      "isBaseline": false,
      "TFE": 0.171,
      "SFE": 0.633,
      "TPC": 0.191,
      "SPC": 0.095,
      "successRateCorrelation": 0.173,
      "boundary": {
        "position": {
          "OA": 0.611,
          "GE": 0.459
        },
        "orientation": {
          "OA": 0.359,
          "GE": 0.719
        },
        "size": {
          "OA": 0.758,
          "GE": 0.5
        }
      }
    },
    {
      "model": "DW05",
      "fullName": "DW05",
      "isBaseline": false,
      "TFE": 0.159,
      "SFE": 0.655,
      "TPC": 0.402,
      "SPC": 0.052,
      "successRateCorrelation": 0.597,
      "boundary": {
        "position": {
          "OA": 0.556,
          "GE": 0.503
        },
        "orientation": {
          "OA": 0.308,
          "GE": 0.658
        },
        "size": {
          "OA": 0.288,
          "GE": 0.636
        }
      }
    },
    {
      "model": "DreamDojo",
      "fullName": "DreamDojo",
      "isBaseline": false,
      "TFE": 0.224,
      "SFE": 0.667,
      "TPC": -0.102,
      "SPC": -0.123,
      "successRateCorrelation": -0.307,
      "boundary": {
        "position": {
          "OA": 0.602,
          "GE": 0.509
        },
        "orientation": {
          "OA": 0.321,
          "GE": 0.677
        },
        "size": {
          "OA": 0.364,
          "GE": 0.633
        }
      }
    },
    {
      "model": "GE-Sim",
      "fullName": "GE-Sim 2.0",
      "isBaseline": false,
      "TFE": 0.184,
      "SFE": 0.721,
      "TPC": 0.239,
      "SPC": -0.004,
      "successRateCorrelation": 0.26,
      "boundary": {
        "position": {
          "OA": 0.491,
          "GE": 0.481
        },
        "orientation": {
          "OA": 0.59,
          "GE": 0.492
        },
        "size": {
          "OA": 0.424,
          "GE": 0.591
        }
      }
    }
  ]
};
window.DATASET_SAMPLES = [
  {
    "environment": "RoboTwin",
    "task": "stack_blocks_three",
    "title": "Stack three blocks",
    "instruction": "Set red block down first, place green block on it, and finish with blue block.",
    "stages": [
      "Block 1: Reach",
      "Block 1: Grasp",
      "Block 1: Place",
      "Block 1: Retract",
      "Block 2: Reach",
      "Block 2: Grasp",
      "Block 2: Place",
      "Block 2: Retract",
      "Block 3: Reach",
      "Block 3: Grasp",
      "Block 3: Place",
      "Block 3: Retract"
    ],
    "success": false,
    "outcome": "Failure",
    "file": "robotwin-stack_blocks_three.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  },
  {
    "environment": "RoboTwin",
    "task": "place_bread_skillet",
    "title": "Place bread in a skillet",
    "instruction": "Position the soft brown bread inside the dark gray skillet.",
    "stages": [
      "Arm 1: Reach / Arm 2: Reach",
      "Arm 1: Grasp / Arm 2: Grasp",
      "Rotate the skillet",
      "Transfer the bread",
      "Place the bread"
    ],
    "success": true,
    "outcome": "Success",
    "file": "robotwin-place_bread_skillet.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  },
  {
    "environment": "RoboTwin",
    "task": "put_object_cabinet",
    "title": "Put an object in a cabinet",
    "instruction": "Slide open the cabinet with metal reinforcements's drawer and set the black stapler for joining pages inside.",
    "stages": [
      "Arm 1: Reach",
      "Arm 1: Grasp",
      "Arm 2: Reach",
      "Arm 2: Grasp",
      "Arm 2: Pull open",
      "Arm 1: Transfer",
      "Arm 1: Place"
    ],
    "success": false,
    "outcome": "Failure",
    "file": "robotwin-put_object_cabinet.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  },
  {
    "environment": "RoboTwin",
    "task": "beat_block_hammer",
    "title": "Strike a block with a hammer",
    "instruction": "Lift the hammer with claw-shaped end using the left arm to hit the block.",
    "stages": [
      "Reach",
      "Grasp",
      "Transfer",
      "Strike"
    ],
    "success": false,
    "outcome": "Failure",
    "file": "robotwin-beat_block_hammer.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  },
  {
    "environment": "RoboTwin",
    "task": "place_empty_cup",
    "title": "Place an empty cup",
    "instruction": "Set the medium blue cylindrical cup on the flat surface gray wooden coaster using the arm.",
    "stages": [
      "Reach",
      "Grasp",
      "Transfer",
      "Place"
    ],
    "success": false,
    "outcome": "Failure",
    "file": "robotwin-place_empty_cup.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  },
  {
    "environment": "RoboTwin",
    "task": "put_bottles_dustbin",
    "title": "Put bottles in a dustbin",
    "instruction": "Use the robot arms to place the yellow bottle with smooth texture, the medium-sized water bottle, and the black bottle with red label in the black bin with white liner.",
    "stages": [
      "Bottle 1: Reach",
      "Bottle 1: Grasp",
      "Bottle 1: Transfer",
      "Bottle 1: Place",
      "Bottle 2: Reach",
      "Bottle 2: Grasp",
      "Bottle 2: Transfer",
      "Bottle 2: Place",
      "Bottle 3: Reach",
      "Bottle 3: Grasp",
      "Bottle 3: Transfer",
      "Bottle 3: Place"
    ],
    "success": false,
    "outcome": "Failure",
    "file": "robotwin-put_bottles_dustbin.png",
    "policy_configuration": "pi05-data-50",
    "episode": "episode_035"
  }
];
