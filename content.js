// Project content and theme. Shared layout files come from project-website-template.
// Edit this file and refresh index.html; run node build-index.mjs before publishing.
window.PAPER_CONTENT = {
  "schemaVersion": 1,
  "sectionOrder": [
    "abstract",
    "method",
    "results",
    "acknowledgements",
    "citation"
  ],
  "theme": {
    "accent": "#820000",
    "text": "#2d2e2e",
    "tintBackground": false,
    "backgroundTintPercent": 0
  },
  "media": {
    "autoplay": true,
    "pauseOthers": false
  },
  "paper": {
    "name": "Real2Code",
    "title": "Reconstruct Articulated Objects via Code Generation",
    "titleLines": ["Reconstruct Articulated Objects", "via Code Generation"],
    "description": "We present Real2Code, a novel approach to reconstructing articulated objects via code generation.",
    "siteUrl": "https://real2code.github.io/",
    "socialImage": "assets/images/teaser-poster.jpg",
    "analyticsId": "G-W89SB0LDFH",
    "authors": [
      {
        "name": "Mandi Zhao",
        "website": "https://mandizhao.github.io",
        "affiliations": [
          "1"
        ]
      },
      {
        "name": "Yijia Weng",
        "website": "https://yijiaweng.github.io//",
        "affiliations": [
          "1"
        ]
      },
      {
        "name": "Dominik Bauer",
        "website": "https://dornik.github.io",
        "affiliations": [
          "2"
        ]
      },
      {
        "name": "Shuran Song",
        "website": "https://shurans.github.io/",
        "affiliations": [
          "1",
          "2"
        ]
      }
    ],
    "affiliations": [
      {
        "id": "1",
        "name": "Stanford University",
        "website": ""
      },
      {
        "id": "2",
        "name": "Columbia University",
        "website": ""
      }
    ],
    "authorNotes": "",
    "conference": "",
    "logos": [],
    "links": [
      {
        "label": "Arxiv",
        "url": "https://arxiv.org/abs/2406.08474"
      },
      {
        "label": "Code",
        "url": "https://github.com/MandiZhao/real2code"
      },
      {
        "label": "Data",
        "url": "https://github.com/MandiZhao/real2code"
      }
    ],
    "video": {
      "src": "real2code-website-video.mp4",
      "poster": "assets/images/teaser-poster.jpg",
      "alt": "Real2Code articulated object reconstruction video",
      "width": 1920,
      "height": 1080,
      "title": "",
      "caption": ""
    }
  },
  "abstract": {
    "title": "Abstract",
    "navTitle": "Abstract",
    "paragraphs": [
      "We present Real2Code, a novel approach to reconstructing articulated objects via code generation. Given visual observations of an object, we first reconstruct its part geometry using an image segmentation model and a shape completion model. We then represent the object parts with oriented bounding boxes, which are input to a fine-tuned large language model (LLM) to predict joint articulation as code. By leveraging pre-trained vision and language models, our approach scales elegantly with the number of articulated parts, and generalizes from synthetic training data to real world objects in unstructured environments. Experimental results demonstrate that Real2Code significantly outperforms previous state-of-the-art in reconstruction accuracy, and is the first approach to extrapolate beyond objects' structural complexity in the training set, and reconstructs objects with up to 10 articulated parts. When incorporated with a stereo reconstruction model, Real2Code also generalizes to real world objects from a handful of multi-view RGB images, without the need for depth or camera information."
    ]
  },
  "method": {
    "title": "Method",
    "navTitle": "Method",
    "blocks": [
      {
        "figure": {
          "src": "real2code-method.jpg",
          "alt": "Real2Code pipeline from multi-view images through part reconstruction to articulated object code.",
          "width": 859,
          "height": 316,
          "captionLabel": "",
          "caption": ""
        }
      },
      {
        "paragraphs": [
          [
            "Given unstructured multi-view RGB images, we leverage the pre-trained ",
            {
              "text": "DUSt3R",
              "url": "https://arxiv.org/abs/2312.14132"
            },
            " model to obtain dense 2D-to-3D pointmaps, and use a fine-tuned 2D segmentation model ",
            {
              "text": "SAM",
              "url": "https://arxiv.org/abs/2304.02643"
            },
            " to perform part-level segmentation and project to segmented 3D point clouds. A learned shape-completion model takes partial point cloud inputs and predicts a dense occupancy field, which is used for part-level mesh extraction. We fine-tune a large language model (LLM) ",
            {
              "text": "CodeLlama",
              "url": "https://arxiv.org/abs/2308.12950"
            },
            " that takes mesh information in the form of oriented bounding boxes, and outputs full code descriptions of the object that can directly be executed in simulation."
          ]
        ]
      }
    ]
  },
  "results": {
    "title": "Qualitative Results",
    "navTitle": "Results",
    "blocks": [
      {
        "figure": {
          "src": "real2code-qual-result.jpg",
          "alt": "Reconstruction comparisons for objects with increasing numbers of articulated parts.",
          "width": 1336,
          "height": 1273,
          "captionLabel": "",
          "caption": ""
        }
      },
      {
        "paragraphs": [
          "We evaluate on objects with a range of varying kinematic complexities, from a two-part laptop to a ten-part multidrawer table. Whereas all methods can handle the simpler laptop articulation, baseline methods struggle as the number of object parts increases, and Real2Code performs reconstruction much more accurately. PARIS runs out of memory and fails to run on the ten-part table (N/A)."
        ]
      },
      {
        "figure": {
          "src": "assets/images/real2code-realobj.jpg",
          "alt": "Real-world RGB inputs, segmented point clouds, and reconstructed articulated objects.",
          "width": 2400,
          "height": 1188,
          "captionLabel": "",
          "caption": ""
        }
      },
      {
        "paragraphs": [
          "We evaluate Real2Code on real world objects using RGB data. For each object, we use 10 pose-free RGB images captured in-the-wild and run Real2Code with DUSt3R[8]. We show one example RGB input (1st row), segmented point clouds (2nd row) and full reconstruction (3rd row) for each object."
        ]
      }
    ]
  },
  "acknowledgements": {
    "title": "Acknowledgements",
    "paragraphs": [
      "This work was supported in part by the Toyota Research Institute, NSF Award \\#2143601, Sloan Fellowship. The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies, either expressed or implied, of the sponsors. The authors would like to thank Zhenjia Xu for the real world data collection, Samir Gadre for helpful pointers on LLM fine-tuning, Cheng Chi for help with training our shape completion model training, and all members of REALab: Zeyi Liu, Xiaomeng Xu, Chuer Pan, Huy Ha, Yihuai Gao, Mengda Xu, Austin Patel, et. al. for valuable feedback and discussion on the paper manuscript. We also thank administrator of Stanford EE department, namely Kenny Green, Steve B. Cousins and Mary K. McMahon for their support during real world data collection."
    ]
  },
  "citation": {
    "title": "Citation",
    "bibtex": "@misc{mandi2024real2code,\n      title={Real2Code: Reconstruct Articulated Objects via Code Generation},\n      author={Zhao Mandi and Yijia Weng and Dominik Bauer and Shuran Song},\n      year={2024},\n      eprint={2406.08474},\n      archivePrefix={arXiv},\n      primaryClass={cs.CV},\n      url={https://arxiv.org/abs/2406.08474},\n}"
  }
};
