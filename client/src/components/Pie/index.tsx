interface Props {
  percentage: number,
  colour: string,
};


/**
 * @description Component that displays a pie chart with a percentage, title and a paragraph
 */

const Pie: React.FC<Props> = ({ percentage, colour }): JSX.Element => {

  /**
   * @description Function that take a number in argument and noramlize it to a percentage
   */

  const normalizePercentage: Function = (percentage: number): number => {

    const tooLow: boolean = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh: boolean = percentage > 100;
  
  
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
  };
  
  
  /**
   * Circle of the Pie chart
   */
  const Circle: React.FC<{colour: string, pct: number}> = ({ colour, pct }): JSX.Element => {
  
    const radius: number = 80;
    const perimeter: number = 2 * Math.PI * radius;
    const strokePercentage: number = ((100 - pct) * perimeter) / 100;
    
    
    return (
      <circle
        r={radius}
        cx={100}
        cy={100}
        fill="transparent"
        stroke={strokePercentage !== perimeter ? colour : ""}
        strokeWidth={"15px"}
        strokeDasharray={perimeter}
        strokeDashoffset={pct ? strokePercentage : 0}
        strokeLinecap="round"
      ></circle>
    );
  };
  
  
  /**
   * @description Title of the pie displaying a percentage
   */
  
  const Title: React.FC<any> = ({ pct }): JSX.Element => {
    
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
        fontWeight={"bold"}
      >
        {pct.toFixed(0)}%
      </text>
    );
  };

  
  /**
   * @description Paragraph of the pie displaying a additionnal description
   */

  const Para: React.FC = (): JSX.Element => {
  
      return (
        <text
          x="50%"
          y="65%"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize={"14px"}
          color={"#282D30"}
        >
          de votre objectif
        </text>
      );
  };


  const pct: number = normalizePercentage(percentage);


  return (
    <div>
      <h5>Score</h5>
      <svg width={200} height={200}>
        <g transform={`rotate(-135 ${"100 100"})`}>
          <Circle colour="#FBFBFB" pct={0}/>
          <Circle colour={colour} pct={pct} />
        </g>
        <Title pct={pct} />
        <Para />
      </svg>
    </div>
  );
};

export default Pie;
