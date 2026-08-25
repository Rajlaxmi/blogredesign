export interface Publication {
  title: string;
  authors: string; // pre-formatted, "A. Ghosh" bolded via **name**
  venue: string;
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    title: 'Tracing the Representation Geometry of Language Models from Pretraining to Post-training',
    authors: 'M.Z. Li*, K.K. Agrawal*, **A. Ghosh***, K.K. Teru, A. Santoro, G. Lajoie, B.A. Richards',
    venue: 'NeurIPS 2025',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2509.23024' },
      { label: 'Project website', url: 'https://melodylizx.github.io/llm-geometry-project/' },
    ],
  },
  {
    title: 'Harnessing small projectors and multiple views for efficient vision pretraining',
    authors: '**A. Ghosh***, K.K. Agrawal*, S. Sodhani, A. Oberman, B.A. Richards',
    venue: 'NeurIPS 2024',
    links: [
      { label: 'NeurIPS paper', url: 'https://neurips.cc/virtual/2024/poster/94719' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2312.10725' },
      { label: 'Project website', url: 'https://sites.google.com/view/harnessing-small-projectors' },
    ],
  },
  {
    title: 'Synaptic Weight Distributions Depend on the Geometry of Plasticity',
    authors: 'R. Pogodin*, J. Cornford*, **A. Ghosh**, G. Gidel, G. Lajoie, B.A. Richards',
    venue: 'ICLR 2024 · Spotlight',
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?id=x5txICnnjC' },
      { label: 'Code', url: 'https://github.com/romanpogodin/synaptic-weight-distr' },
    ],
  },
  {
    title: 'How gradient estimator variance and bias impact learning in neural networks',
    authors: '**A. Ghosh**, Y.H. Liu, G. Lajoie, K.P. Körding, B.A. Richards',
    venue: 'ICLR 2023',
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?id=EBC60mxBwyw' },
      { label: 'Code', url: 'https://github.com/linclab/approximateGradients' },
    ],
  },
  {
    title: 'α-ReQ: Assessing representation quality by measuring eigenspectrum decay',
    authors: 'K.K. Agrawal*, A.K. Mondal*, **A. Ghosh***, B.A. Richards',
    venue: 'NeurIPS 2022',
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?id=ii9X4vtZGTZ' },
      { label: 'Blog post', url: 'https://mila.quebec/en/article/a-req-assessing-representation-quality-in-ssl' },
    ],
  },
  {
    title: 'Estimating brain age from structural MRI and MEG data',
    authors: 'A. Xifra-Porxas*, **A. Ghosh***, G.D. Mitsis, M.H. Boudrias',
    venue: 'NeuroImage 2021',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1016/j.neuroimage.2021.117822' },
      { label: 'Code', url: 'https://github.com/axifra/BrainAge_MRI-MEG' },
    ],
  },
];
