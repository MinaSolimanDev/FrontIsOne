import React from "react";
// @Material-UI
import { Typography, Button, Divider } from "@material-ui/core";
import Plus from "../../../../common/components/icons/Plus";
import PenIcon from "../../../../common/components/icons/PenIcon";
// Styles
import { useStyles } from "./dashBoardStyles";
import LineChart from "./LineChart";

import supm1 from "../../../../common/assets/imgs/originalBranches/spum1.png"
import supm2 from "../../../../common/assets/imgs/originalBranches/spum2.png"
import supm3 from "../../../../common/assets/imgs/originalBranches/spum3.png"
import supm4 from "../../../../common/assets/imgs/originalBranches/spum4.png"
import supm5 from "../../../../common/assets/imgs/originalBranches/spum5.png"
import supm6 from "../../../../common/assets/imgs/originalBranches/spum6.png"

const Dashboard = () => {
  const classes = useStyles();

  const branches = [
    { title: "Washington Supermart - Warehouse", image: supm1 },
    { title: "Washington Supermart - Warehouse", image: supm2 },
    { title: "Washington Supermart - Warehouse", image: supm4 },
    { title: "Washington Supermart - Warehouse", image: supm3 },
    { title: "Washington Supermart - Warehouse", image: supm5 },
    { title: "Washington Supermart - Warehouse", image: supm6 },
    { title: "Washington Supermart - Warehouse", image: supm1 },
    { title: "Washington Supermart - Warehouse", image: supm2 },
    { title: "Washington Supermart - Warehouse", image: supm4 },
    { title: "Washington Supermart - Warehouse", image: supm3 },
    { title: "Washington Supermart - Warehouse", image: supm5 },
    { title: "Washington Supermart - Warehouse", image: supm6 },
  ];

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.dashboard__title}>
          <Typography className={classes.dashboard__title__main}>
            Welcome Gregorio!
        </Typography>
          <Typography className={classes.dashboard__title__time}>
            Today is Monday, February 15, 2020
        </Typography>
        </div>
        <Button startIcon={<PenIcon />} variant="outlined" className={classes.dashboard__button__manage}>
          Manage Dashboard
        </Button>
        <Button startIcon={<Plus />} variant="contained" className={classes.dashboard__button__create}>
          Create New Dashboard
        </Button>
      </div>

      <div className={classes.dashboard__stats}>
        <div className={classes.dashboard__state__chart}>
          <div className={classes.dashboard__state__chart__title}>
            <div className={classes.dashboard__state__title__main__chart}>P 100,000,00</div>
            <div className={classes.dashboard__state__title__disc__chart}>Sales in current month</div>
          </div>
          <div className={classes.dashboard__stats__chart__graph}>
            <LineChart />
          </div>
        </div>

        <div className={classes.dashboard__state__list}>
          <div className={classes.dashboard__state__list__title}>
            <div className={classes.dashboard__state__title__main__list}>Top Branches</div>
            <div className={classes.dashboard__state__title__disc__list}>Descending</div>
          </div>
          <Divider className={classes.hr} />
          <div style={{ overflowY: "scroll", height: "430px" }}>
            {branches.map((item, index) => {
              return (
                <div key={index} className={classes.dashboard__state__list__items} >
                  <div style={{ flex: 1, textAlign: 'center' }}><img className={classes.dashboard__state__list__items__image} src={item.image}></img></div>
                  <div className={classes.dashboard__state__list__items__title}>{item.title}</div>
                  <div className={classes.dashboard__state__list__items__percent}>50%</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default (Dashboard);
