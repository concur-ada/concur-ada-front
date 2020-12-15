import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { string, number, bool } from 'prop-types';

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954',
};

const PercentageBase = ({
  className,
  strokeColor,
  strokeWidth,
  innerText,
  legendText,
  percentage,
  trailStrokeWidth,
  trailStrokeColor,
  trailSpaced,
  speed,
}) => {
  const [progressBar, setProgressBar] = useState(0);
  const pace = percentage / speed;
  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, pace);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) updatePercentage();
  }, [progressBar]);

  return (
    <figure className={className}>
      <svg viewBox={circleConfig.viewBox}>
        <circle
          className="donut-ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={trailStrokeColor}
          strokeWidth={trailStrokeWidth}
          strokeDasharray={trailSpaced ? 1 : 0}
        />

        <circle
          className="donut-segment"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressBar} ${100 - progressBar}`}
          strokeDashoffset={INITIAL_OFFSET}
        />

        <g className="chart-text">
          <text x="50%" y="50%" className="chart-number">
            {progressBar}%
          </text>
          <text x="50%" y="50%" className="chart-label">
            {innerText}
          </text>
        </g>
      </svg>
      {legendText && (
        <figcaption className="figure-key">
          <ul
            className="figure-key-list"
            aria-hidden="true"
            role="presentation"
          >
            <li>
              <span className="shape-circle" />
              <span>{legendText}</span>
            </li>
          </ul>
        </figcaption>
      )}
    </figure>
  );
};

PercentageBase.propTypes = {
  className: string.isRequired,
  strokeColor: string,
  strokeWidth: number,
  innerText: string,
  legendText: string,
  percentage: number,
  trailStrokeWidth: number,
  trailStrokeColor: string,
  trailSpaced: bool,
  speed: number,
};

PercentageBase.defaultProps = {
  strokeColor: 'blueviolet',
  strokeWidth: 1,
  innerText: 'Completed',
  legendText: '',
  percentage: 0,
  trailStrokeWidth: 1,
  trailStrokeColor: '#d2d3d4',
  trailSpaced: false,
  speed: 1,
};

const PercentageDial = styled(PercentageBase)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  max-width: ${(props) => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: ${(props) => props.textColor};
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .chart-label {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    transform: translateY(0.7em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${(props) => props.strokeColor};
    text-transform: capitalize;
  }
`;

PercentageDial.propTypes = {
  textColor: string,
  strokeColor: string,
  maxSize: string,
};

PercentageDial.defaultProps = {
  textColor: 'black',
  strokeColor: 'green',
  maxSize: '20vh',
};

export default PercentageDial;
