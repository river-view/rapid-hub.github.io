import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hydrologic Routing',
    Svg: require('@site/static/img/water_flow.svg').default,
    description: (
      <>
        RAPID2 provides a robust framework for hydrologic routing, utilizing
        the Muskingum method for accurate river flow simulations.
      </>
    ),
  },
  {
    title: 'Scalable & Efficient',
    Svg: require('@site/static/img/scalability.svg').default,
    description: (
      <>
        Optimized for large-scale hydrologic datasets, RAPID2 ensures efficient 
        processing of river network connectivity and discharge calculations.
      </>
    ),
  },
  {
    title: 'Seamless Data Integration',
    Svg: require('@site/static/img/data-processing.svg').default,
    description: (
      <>
        Supports NetCDF-based inflow and outflow data, allowing easy integration 
        with hydrologic models and observational datasets.
      </>
    ),
  },
  {
    title: 'Open-Source & Extensible',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
        Built with extensibility in mind, RAPID2 provides modular components 
        that can be customized for research and operational hydrology applications.
      </>
    ),
  },
  {
    title: 'Scientific Accuracy',
    Svg: require('@site/static/img/scientific-analysis.svg').default,
    description: (
      <>
        Designed for research-grade hydrologic modeling, ensuring reproducibility 
        and compatibility with peer-reviewed methodologies.
      </>
    ),
  },
  {
    title: 'Python & Docker Support',
    Svg: require('@site/static/img/code-development.svg').default,
    description: (
      <>
        Easily deployable via Python or Docker, allowing flexible usage across 
        different computing environments.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
