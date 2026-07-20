export interface Skill {
  name: string;
  categoryKey: string;
  detail: {
    pt: string;
    en: string;
    es: string;
  };
}

export const skills: Skill[] = [
  {
    name: 'Python',
    categoryKey: 'skills.categories.languages',
    detail: {
      pt: 'Especialista em automação, análise e scripts complexos.',
      en: 'Specialist in automation, analysis and complex scripts.',
      es: 'Especialista en automatización, análisis y scripts complejos.'
    }
  },
  {
    name: 'SQL',
    categoryKey: 'skills.categories.databases',
    detail: {
      pt: 'Consultas avançadas, otimização e modelagem relacional.',
      en: 'Advanced queries, optimization and relational modeling.',
      es: 'Consultas avanzadas, optimización y modelado relacional.'
    }
  },
  {
    name: 'R',
    categoryKey: 'skills.categories.languages',
    detail: {
      pt: 'Análise estatística profunda e visualização científica.',
      en: 'Deep statistical analysis and scientific visualization.',
      es: 'Análisis estadístico profundo y visualización científica.'
    }
  },
  {
    name: 'Scikit-Learn',
    categoryKey: 'skills.categories.ml',
    detail: {
      pt: 'Construção de pipelines de ML e modelos preditivos.',
      en: 'Building ML pipelines and predictive models.',
      es: 'Construcción de pipelines de ML y modelos predictivos.'
    }
  },
  {
    name: 'Pandas / NumPy',
    categoryKey: 'skills.categories.data_manipulation',
    detail: {
      pt: 'Manipulação massiva de dataframes e matrizes.',
      en: 'Massive manipulation of dataframes and matrices.',
      es: 'Manipulación masiva de dataframes y matrices.'
    }
  },
  {
    name: 'PyTorch / TensorFlow',
    categoryKey: 'skills.categories.deep_learning',
    detail: {
      pt: 'Desenvolvimento de Redes Neurais e Deep Learning.',
      en: 'Development of Neural Networks and Deep Learning.',
      es: 'Desarrollo de Redes Neurales y Deep Learning.'
    }
  },
  {
    name: 'PowerBI / Tableau',
    categoryKey: 'skills.categories.visualization',
    detail: {
      pt: 'Dashboards executivos e storytelling de dados.',
      en: 'Executive dashboards and data storytelling.',
      es: 'Dashboards ejecutivos y storytelling de datos.'
    }
  },
  {
    name: 'AWS / Azure',
    categoryKey: 'skills.categories.cloud',
    detail: {
      pt: 'Deploy e gerenciamento de infraestrutura DS em nuvem.',
      en: 'Deploy and management of cloud DS infrastructure.',
      es: 'Deploy y gestión de infraestructura DS en la nube.'
    }
  },
  {
    name: 'Docker',
    categoryKey: 'skills.categories.mlops',
    detail: {
      pt: 'Containerização de ambientes de desenvolvimento e produção.',
      en: 'Containerization of development and production environments.',
      es: 'Containerización de ambientes de desarrollo y producción.'
    }
  },
  {
    name: 'Git',
    categoryKey: 'skills.categories.tools',
    detail: {
      pt: 'Versionamento e colaboração em times técnicos.',
      en: 'Versioning and collaboration in technical teams.',
      es: 'Versionamiento y colaboración en equipos técnicos.'
    }
  }
];
