"""Part grouping and triangle budgets for the shipped model."""
# name -> (list of source ids, target triangle count, group, side filter)
CRANIUM = {
    'frontal':        (['FMA52734'], 12000),
    'occipital':      (['FMA52735'], 10000),
    'sphenoid':       (['FMA52736'], 8000),
    'temporal_R':     (['FMA52738'], 6500),
    'temporal_L':     (['FMA52739'], 6500),
    'ethmoid':        (['FMA52740'], 2500),
    'parietal_R':     (['FMA52788'], 7000),
    'parietal_L':     (['FMA52789'], 7000),
    'zygomatic_R':    (['FMA52892'], 3000),
    'zygomatic_L':    (['FMA52893'], 3000),
    'lacrimal_R':     (['FMA53645'], 500),
    'lacrimal_L':     (['FMA53646'], 500),
    'nasal_R':        (['FMA53647'], 700),
    'nasal_L':        (['FMA53648'], 700),
    'maxilla_R':      (['FMA53649'], 8000),
    'maxilla_L':      (['FMA53650'], 8000),
    'palatine_R':     (['FMA53655'], 1400),
    'palatine_L':     (['FMA53656'], 1400),
    'concha_R':       (['FMA54737'], 700),
    'concha_L':       (['FMA54738'], 700),
    'vomer':          (['FMA9710'], 900),
}
MANDIBLE = {'mandible': (['FMA52748'], 14000)}
UPPER_TEETH = ['FMA55680', 'FMA55681', 'FMA55682', 'FMA55683', 'FMA55798', 'FMA55799', 'FMA55688', 'FMA55689',
               'FMA55690', 'FMA55691', 'FMA55697', 'FMA55698', 'FMA55699', 'FMA55700']
LOWER_TEETH = ['FMA57140', 'FMA57141', 'FMA57142', 'FMA57143', 'FMA55686', 'FMA55687', 'FMA55692', 'FMA55693',
               'FMA55694', 'FMA55695', 'FMA55703', 'FMA55704', 'FMA55705', 'FMA55706']
TOOTH_TRIS = 1000
# brain: name -> list of (source id, target tris, side) ; side None = take whole, 'L'/'R' = split by x sign
# FMA72701 / FMA72702 are called "accessory short gyrus" in the data set's part list, but the meshes lie on the
# lateral surface below the middle frontal gyrus, where the inferior frontal gyrus is: grouped with the frontal lobe.
BRAIN = {
    'frontal_lobe_R':   [('FMA72653', 4800, None), ('FMA72655', 2600, None), ('FMA72661', 3000, None), ('FMA72701', 2600, None), ('BP51', 1700, 'R')],
    'frontal_lobe_L':   [('FMA72654', 4800, None), ('FMA72656', 2600, None), ('FMA72662', 3000, None), ('FMA72702', 2600, None), ('BP51', 1700, 'L')],
    'parietal_lobe_R':  [('FMA72665', 2700, None), ('FMA72667', 1600, None), ('FMA72669', 2100, None), ('BP50', 3000, None)],
    'parietal_lobe_L':  [('FMA72666', 2700, None), ('FMA72668', 1600, None), ('FMA72670', 2100, None), ('BP49', 3000, None)],
    'temporal_lobe_R':  [('FMA72800', 1500, None), ('FMA72804', 1800, None), ('FMA72685', 2200, None), ('FMA72687', 2200, None), ('FMA72689', 1000, None), ('FMA72705', 500, None)],
    'temporal_lobe_L':  [('FMA72801', 1500, None), ('FMA72805', 1800, None), ('FMA72686', 2200, None), ('FMA72688', 2200, None), ('FMA72690', 1000, None), ('FMA72706', 500, None)],
    'occipital_lobe_R': [('FMA72975', 4500, None)],
    'occipital_lobe_L': [('FMA72976', 4500, None)],
    'limbic_R':         [('FMA72717', 1300, None), ('FMA72977', 900, None)],
    'limbic_L':         [('FMA72718', 1300, None), ('FMA72978', 900, None)],
    'cerebellum':       [('FMA67944', 20000, None)],
    'brainstem':        [('FMA61993nsn', 900, None), ('FMA62394', 1100, None), ('FMA67943', 1800, None), ('FMA62004', 1200, None)],
}
