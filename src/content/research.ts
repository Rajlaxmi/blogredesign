export interface ResearchLink {
  label: string;
  url: string;
  /** One-line gloss of what the linked work did, shown under the citation. */
  note?: string;
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
      {
        label: 'Li*, Agrawal*, Ghosh*, et al. — NeurIPS 2025',
        url: 'https://arxiv.org/abs/2509.23024',
        note: 'Tracing the Representation Geometry of Language Models from Pretraining to Post-training.',
      },
      {
        label: 'Ghosh*, Chorghay*, Bhaktiari, and Richards — NeurReps 2025',
        url: 'https://openreview.net/forum?id=Mt420NAIrX',
      },
      {
        label: 'Ghosh*, Agrawal*, et al. — NeurIPS 2024',
        url: 'https://neurips.cc/virtual/2024/poster/94719',
        note: 'Harnessing small projectors and multiple views for efficient vision pretraining.',
      },
      {
        label: 'Agrawal*, Mondal*, Ghosh*, and Richards — NeurIPS 2022',
        url: 'https://openreview.net/forum?id=ii9X4vtZGTZ',
        note: 'α-ReQ: Assessing representation quality by measuring eigenspectrum decay.',
      },
    ],
  },
  {
    title: 'Biologically-plausible credit assignment algorithms',
    tags: ['ML / AI', 'Neuroscience'],
    description:
      'Investigating how the brain solves the credit-assignment problem by characterizing how biological constraints — non-Euclidean plasticity, noisy gradient estimation — impact learning. This grounds how biological and neuromorphic systems achieve efficient learning and strong generalization despite imperfect gradient signals.',
    links: [
      {
        label: 'Pogodin*, Cornford*, Ghosh, et al. — ICLR 2024',
        url: 'https://openreview.net/forum?id=x5txICnnjC',
        note: 'Synaptic Weight Distributions Depend on the Geometry of Plasticity.',
      },
      {
        label: 'Ghosh, et al. — ICLR 2023',
        url: 'https://openreview.net/forum?id=EBC60mxBwyw',
        note: 'How gradient estimator variance and bias impact learning in neural networks.',
      },
    ],
  },
  {
    title: 'AI for biological applications',
    tags: ['ML / AI', 'Neuroscience'],
    description: 'Some of the projects where I developed AI pipelines for biological applications:',
    links: [
      {
        label: 'Xifra-Porxas*, Ghosh*, Mitsis, and Boudrias — NeuroImage 2021',
        url: 'https://doi.org/10.1016/j.neuroimage.2021.117822',
        note: 'We developed and applied a machine learning framework to predict brain age of healthy subjects from MRI and MEG recordings.',
      },
      {
        label: 'Ghosh*, Sivakumar*, and Tom* — Intel Innovate FPGA Project (Silver & Iron Award Winners)',
        url: 'https://www.innovatefpga.com/cgi-bin/innovate/teams2018.pl?Id=AS031',
        note: 'We built a deep learning framework on an Intel FPGA board for decoding imagined motor movements from EEG recordings to enable real-time typing.',
      },
      {
        label: 'Ghosh et al. — Frontiers in Neuroscience',
        url: 'https://www.frontiersin.org/articles/10.3389/fnins.2019.01215/full',
        note: 'We built a deep learning framework to identify exercise-induced EEG signatures, and improve population-level generalization of deep learning methods in a limited sample setting.',
      },
      {
        label: 'Ghosh, Singh, and Sheet — IEEE ICIIS',
        url: 'https://ieeexplore.ieee.org/document/8300425',
        note: 'We implemented deep learning algorithms for detection of mitotic nuclei from histopathology images, enabling detection of breast cancers and leukemia.',
      },
    ],
  },
];
