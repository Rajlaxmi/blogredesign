export interface ResearchLink {
  label: string;
  url: string;
}

export interface ResearchDirection {
  title: string;
  tags: string[];
  description: string;
  links: ResearchLink[];
}

export const research: ResearchDirection[] = [
  {
    title: 'Representation geometry in artificial and biological networks',
    tags: ['LLMs', 'ML / AI', 'Neuroscience'],
    description:
      'Investigating the geometric structure and spectral properties of neural network representations to understand how artificial and biological systems encode information — and using that to build task-agnostic metrics that predict model behavior and reveal how learning happens in large-scale vision and language models.',
    links: [
      { label: 'Li*, Agrawal*, Ghosh*, et al. — NeurIPS 2025', url: 'https://arxiv.org/abs/2509.23024' },
      { label: 'Ghosh*, Chorghay*, Bhaktiari, and Richards — NeurReps 2025', url: 'https://openreview.net/forum?id=Mt420NAIrX' },
      { label: 'Ghosh*, Agrawal*, et al. — NeurIPS 2024', url: 'https://neurips.cc/virtual/2024/poster/94719' },
      { label: 'Agrawal*, Mondal*, Ghosh*, and Richards — NeurIPS 2022', url: 'https://openreview.net/forum?id=ii9X4vtZGTZ' },
    ],
  },
  {
    title: 'Biologically-plausible credit assignment algorithms',
    tags: ['ML / AI', 'Neuroscience'],
    description:
      'Investigating how the brain solves the credit-assignment problem by characterizing how biological constraints — non-Euclidean plasticity, noisy gradient estimation — impact learning. This grounds how biological and neuromorphic systems achieve efficient learning and strong generalization despite imperfect gradient signals.',
    links: [
      { label: 'Pogodin*, Cornford*, Ghosh, et al. — ICLR 2024', url: 'https://openreview.net/forum?id=x5txICnnjC' },
      { label: 'Ghosh, et al. — ICLR 2023', url: 'https://openreview.net/forum?id=EBC60mxBwyw' },
    ],
  },
  {
    title: 'AI for biological applications',
    tags: ['ML / AI', 'Neuroscience'],
    description:
      'Building AI pipelines for biological problems: predicting brain age from MRI and MEG recordings; decoding imagined motor movements from EEG for real-time typing on an FPGA; identifying exercise-induced EEG signatures; and detecting mitotic nuclei in histopathology images for cancer diagnosis.',
    links: [
      { label: 'Xifra-Porxas*, Ghosh*, Mitsis, and Boudrias — NeuroImage 2021', url: 'https://doi.org/10.1016/j.neuroimage.2021.117822' },
      { label: 'Ghosh*, Sivakumar*, and Tom* — Intel Innovate FPGA (Silver & Iron Award)', url: 'https://www.innovatefpga.com/cgi-bin/innovate/teams2018.pl?Id=AS031' },
      { label: 'Ghosh et al. — Frontiers in Neuroscience', url: 'https://www.frontiersin.org/articles/10.3389/fnins.2019.01215/full' },
      { label: 'Ghosh, Singh, and Sheet — IEEE ICIIS', url: 'https://ieeexplore.ieee.org/document/8300425' },
    ],
  },
];
