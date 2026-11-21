/* Edit project data here to add more PLC or SCADA projects. Do not publish employer or customer secrets. */
window.PORTFOLIO_CATALOG = {
  "plc": {
    "file": "plc-projects.html",
    "num": "02",
    "name": "PLC & Industrial Automation",
    "sub": "PLC logic · machine sequences · motor control · synchronization",
    "intro": "Each card describes the PLC/control-program workstream. Related HMI and SCADA interfaces are maintained in the HMI / SCADA collection, with direct cross-links.",
    "projects": [
      {
        "id": "large-cable-line-plc",
        "repository": "https://github.com/haopham2109-pixel/Large-Coating-Line-PLC",
        "private": true,
        "title": "Large Cable Coating Line — PLC Control",
        "category": "PLC / Industrial line",
        "status": "Engineering case study · private source",
        "desc": "Industrial cable-coating line with machine sequencing, capstan–extruder coordination, drives and length measurement.",
        "tags": [
          "S7-1200 G2",
          "TIA Portal",
          "Capstan",
          "Extruder",
          "VFD"
        ],
        "points": [
          "Control workstream: manual/automatic sequences, drive interfacing and operation interlocks.",
          "Speed coordination and encoder-based length/speed feedback.",
          "Industrial source code and customer electrical drawings are not published."
        ],
        "related": [
          [
            "HMI workstream for the same line",
            "scada-projects.html#large-cable-line-hmi"
          ]
        ],
        "system": "Large cable coating line"
      },
      {
        "id": "sz2-line-plc",
        "repository": "https://github.com/haopham2109-pixel/SZ2-Line-PLC",
        "private": true,
        "title": "SZ2 Cable Line — PLC Engineering",
        "category": "PLC / Cable machinery",
        "status": "Engineering development · no FAT claim",
        "desc": "LAD-based Siemens control project addressing machine synchronization, manual/automatic operation and high-speed measurements.",
        "tags": [
          "S7-1200",
          "LAD",
          "HSC",
          "Synchronization"
        ],
        "points": [
          "Siemens LAD engineering for manual/automatic sequences, synchronization and high-speed measurements.",
          "Engineering compile and simulation work do not constitute completed factory acceptance testing (FAT).",
          "Company/project source code and electrical diagrams are not made public."
        ],
        "related": [
          [
            "HMI workstream for SZ2",
            "scada-projects.html#sz2-line-hmi"
          ]
        ],
        "system": "SZ2 cable line"
      },
      {
        "id": "brick-factory-plc",
        "repository": "https://github.com/haopham2109-pixel/Brick-Factory-PLC",
        "private": true,
        "title": "Brick Factory — PLC Control Program",
        "category": "PLC / Plant control",
        "status": "Project slot · details to verify",
        "desc": "Reserved for the brick-factory PLC program. Controller type, responsibilities, implementation and results have not yet been verified.",
        "tags": [
          "Plant control",
          "PLC",
          "Industrial process"
        ],
        "points": [
          "Add the verified PLC platform, operating sequence, I/O architecture and test evidence.",
          "Add an authorized controller program or a non-confidential engineering case study.",
          "SCADA interface for this same factory is cataloged under HMI / SCADA."
        ],
        "related": [
          [
            "SCADA workstream for the same factory",
            "scada-projects.html#brick-factory-scada"
          ]
        ],
        "system": "Brick factory"
      }
    ]
  },
  "scada": {
    "file": "scada-projects.html",
    "num": "03",
    "name": "HMI & SCADA",
    "sub": "Operator interfaces · alarms · trends · industrial monitoring",
    "intro": "This section contains the visualization layer of industrial systems. The PLC program stays under category 02, while the HMI/SCADA interface stays here—even when both belong to the same factory.",
    "projects": [
      {
        "id": "large-cable-line-hmi",
        "repository": "https://github.com/haopham2109-pixel/Large-Coating-Line-HMI",
        "private": true,
        "title": "Large Cable Coating Line — Weintek HMI",
        "category": "HMI / Machine interface",
        "status": "HMI case study · private source",
        "desc": "Operator interface for line operation, status monitoring, temperature zones, speed displays and alarms.",
        "tags": [
          "Weintek",
          "EasyBuilder Pro",
          "Machine HMI"
        ],
        "points": [
          "Operator commands and status visualization for the associated production line.",
          "Monitoring of process values and alarms; details limited to publishable information.",
          "Customer project files, settings and screenshots require sharing approval."
        ],
        "related": [
          [
            "PLC workstream for this line",
            "plc-projects.html#large-cable-line-plc"
          ]
        ],
        "system": "Large cable coating line"
      },
      {
        "id": "sz2-line-hmi",
        "repository": "https://github.com/haopham2109-pixel/SZ2-Line-HMI",
        "private": true,
        "title": "SZ2 Cable Line — HMI Interface",
        "category": "HMI / Operator controls",
        "status": "HMI specification · evidence pending",
        "desc": "HMI workstream for machine modes, commands, production values, drives and alarm displays.",
        "tags": [
          "HMI",
          "Manual / Auto",
          "Alarms"
        ],
        "points": [
          "The requested HMI scope includes manual/auto commands, running values, multiple drives and alarms.",
          "Confirm finished HMI screens and test status before representing this as a commissioned interface.",
          "The associated PLC workstream is listed separately under category 02."
        ],
        "related": [
          [
            "PLC workstream for SZ2",
            "plc-projects.html#sz2-line-plc"
          ]
        ],
        "system": "SZ2 cable line"
      },
      {
        "id": "brick-factory-scada",
        "repository": "https://github.com/haopham2109-pixel/Brick-Factory-SCADA",
        "private": true,
        "title": "Brick Factory — SCADA Visualization",
        "category": "SCADA / Plant supervision",
        "status": "Project slot · details to verify",
        "desc": "Reserved for the brick-factory SCADA interface. Screens, communication links and commissioning status still require verification.",
        "tags": [
          "SCADA",
          "Plant monitoring",
          "Visualization"
        ],
        "points": [
          "Publish verified SCADA screens and architecture only with permission.",
          "Describe screen navigation, alarms, user roles and PLC communications when available.",
          "Keep the PLC control program as a separate workstream in category 02."
        ],
        "related": [
          [
            "PLC program for the same factory",
            "plc-projects.html#brick-factory-plc"
          ]
        ],
        "system": "Brick factory"
      }
    ]
  }
};
