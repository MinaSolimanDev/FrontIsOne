import React, { useState, useRef } from "react";
// import {useClickAway} from 'react-use';
// @Material-UI
import { Button, Collapse, Slide, Zoom } from "@material-ui/core";
// Icons
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// Styles
import { HtmlTooltip } from "../../../../../../common/assets/jss/components/adminstration";
import { useStyles2 } from './modalsStyles';

const RenderInputField = ({ path, name, initialValue, placeholder, handleChange }) => {
  const classes = useStyles2();
  const [enableEdit, setEnableEdit] = useState(false);
  const inputEl = useRef(null);

  // useClickAway(inputEl, () => {
  //   setEnableEdit(false);
  // });

  // enable editing & focus the input
  const handleEdit = () => {
    setEnableEdit(true);
    inputEl.current.focus();
  }

  return (
    <>
      <input
        ref={inputEl}
        disabled={!enableEdit}
        className={classes.root}
        placeholder={placeholder}
        required
        name={name}
        type="text"
        defaultValue={initialValue}
        onChange={(e) => handleChange(path, e.target.value)}
      />

      {/* edit icon */}
      <div onClick={handleEdit} className={classes.edit__icon}>
        <EditIcon />
      </div>
    </>
  );
};

const CategoriesForm = ({ update, add, selectedCat, setOpen, open, initialData, openList, setOpenList }) => {
  const classes = useStyles2();

  const toggle = (nodeID) => {
    setOpenList({ ...openList, [`${nodeID}`]: !openList[nodeID] });
  }

  const renderInput = (type, path, name, controls, viewArrows = true) => {
    return (
      <Slide in direction="right">
        <div style={{ position: 'relative' }} >
          <div className={classes.edit__input}>
            {viewArrows ?
              <div style={{ width: 60, display: 'flex', cursor: 'pointer', height: '100%', alignItems: 'center' }} onClick={() => toggle(name)}>
                {openList[`${name}`] ?
                  <>
                    <ExpandMoreIcon />
                    <FolderOpenIcon />
                  </>
                  :
                  <>
                    <ChevronRightIcon />
                    <FolderIcon />
                  </>
                }
              </div>
              :
              <div style={{ width: 20 }} />
            }
            <RenderInputField name={name} initialValue={initialData[name]} path={path} handleChange={update} />

            {/* Controls area remove and add buttons */}
            {controls && <div className={classes.edit__input_controlls}>
              <HtmlTooltip title="Remove" arrow >
                <div stlye={{ cursor: 'pointer' }}>
                  <RemoveIcon onClick={() => setOpen({ ...open, delete: { state: true, path, node: name, msgModal: type } })} />
                </div>
              </HtmlTooltip>

              <HtmlTooltip title="Add Sub Category" arrow >
                <div stlye={{ cursor: 'pointer' }} onClick={() => add()}>
                  <AddIcon />
                </div>
              </HtmlTooltip>
            </div>}
          </div>
        </div>
      </Slide>
    )
  }

  const renderButtonAdd = (type, path, label) => {
    return (
      <Button
        startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
        variant="outlined"
        className={classes.cat__add}
        onClick={() => add(type, path)}
      >
        {label}
      </Button>
    )
  }

  return (
    <form className={classes.edit__container} >
      <div className={classes.edit__container__inner}>
        <div>
          <div className={classes.edit__arrow}>
            {renderInput("Category", 'root', `${selectedCat._uid}`, false)}

            <Collapse className={classes.nested} in={openList[`${selectedCat._uid}`]}>
              {selectedCat?.sub.length > 0 ? selectedCat?.sub?.map((sub, subIndex) => (
                <div className={classes.edit__arrow} key={sub._uid}>
                  {renderInput("Sub Category", 'sub', `${sub._uid}`, true)}

                  <Collapse className={classes.nested} in={openList[`${sub._uid}`]}>
                    {(sub.productsGroup?.length > 0 ? sub.productsGroup.map((group, groupIndex) => (
                      <div className={classes.edit__arrow} key={group._uid}>
                        {renderInput("Product Group", { sub: sub._uid }, `${group._uid}`, true)}

                        <Collapse className={classes.nested} in={openList[group._uid]}>
                          {group.products.length > 0 ? group?.products?.map((product, productIndex) => (
                            <div className={classes.edit__arrow} key={product._uid}>
                              {renderInput("Product", { sub: sub._uid, product, group: group._uid }, `${product._uid}`, true, false)}
                            </div>
                          )) : renderButtonAdd("product", { sub: subIndex, group: groupIndex }, "Add Product")}
                        </Collapse>
                      </div>
                    )) : renderButtonAdd("group", { sub: subIndex }, "Add Product Group"))}
                  </Collapse>
                </div>
              )) : renderButtonAdd("subCategory", false, "Add Sub Category")}
            </Collapse>
          </div>
        </div>

        <div className={classes.edit__input} style={{ width: 450 }}>
          <RenderInputField name="description" initialValue={initialData.description} handleChange={update} />
        </div>

      </div>
    </form >
  );
}

export default CategoriesForm;