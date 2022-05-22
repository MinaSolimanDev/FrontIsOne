import React, { useState } from "react";
// @Material-UI
import { Typography, Button, Zoom, Slide } from "@material-ui/core";
// Icons
import CloseIcon from "@material-ui/icons/Close";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// Assets
import CategoriesForm from "./CategoriesForm";
import DeleteCategory from "../../../../../../common/components/modals/DeleteModal";
import { fakeCategories } from "../../../../../../common/helpers/FakeData";
// Styles
import { useStyles2 } from './modalsStyles';
import { useStyles } from '../../../../../../common/assets/jss/components/adminstration';

// sets the initial values object where _uid is the KEY and name is the VALUE 
function extractInitialValues(category) {
  const values = {}
  // register category description
  values.description = category?.description
  // register category
  values[category._uid] = category?.name
  // register sub category fields
  category.sub?.forEach(sub => {
    values[sub._uid] = sub.name
    // register product groups fields
    sub.productsGroup?.forEach(group => {
      values[group._uid] = group.name
      // register each product fields
      group.products?.forEach(product => {
        values[product._uid] = product.name
      })
    })
  })
  return values
}

function EditCategory({ history, match }) {
  const classes = useStyles2();
  const classes1 = useStyles();
  const id = +match.params.id;
  const [viewHint, setViewHint] = useState(true);
  const [selectedCat, setselectedCat] = useState(fakeCategories.filter(c => c._uid === id)[0]);
  const [openList, setOpenList] = useState(extractKeys(selectedCat));
  const [initialData, setInitialData] = useState(extractInitialValues(selectedCat));
  //  models
  const [open, setOpen] = useState({});
  // TODO
  const update = (path, newValue) => {
    console.log(path, newValue)
  }

  function extractKeys(category) {
    const values = {}
    // register category
    values[category._uid] = true
    // register sub category fields
    category?.sub?.forEach(sub => {
      values[sub._uid] = true
      // register product groups fields
      sub.productsGroup?.forEach(group => {
        values[group._uid] = true
      })
    })
    return values;
  }

  // Add Category
  const addSubCategory = (type = "subCategory", path) => {
    if (type === "subCategory") {

      let subCategories = selectedCat.sub;
      let newSub = {
        _uid: Math.floor(Math.random() * (999999 - 9999 + 1)) + 9999,
        name: `Input Sub Category ${subCategories.length + 1}`,
        productsGroup: [],
      }
      subCategories.push(newSub)

      setselectedCat({ ...selectedCat, sub: subCategories })
      setInitialData({ ...initialData, [`${newSub._uid}`]: newSub.name })
      setOpenList({ ...openList, [`${newSub._uid}`]: true })
    } else if (type === "product") {
      let newProduct = {
        _uid: Math.floor(Math.random() * (99999 - 9999 + 1)) + 9999,
        name: `Input Product`,
      }

      selectedCat.sub[path.sub].productsGroup[path.group].products.push(newProduct);

      setselectedCat({ ...selectedCat })
      setInitialData({ ...initialData, [`${newProduct._uid}`]: newProduct.name });
      setOpenList({ ...openList, [`${newProduct._uid}`]: true })

    } else {
      let newGroup = {
        _uid: Math.floor(Math.random() * (99999 - 9999 + 1)) + 9999,
        name: `Input Product group`,
        products: []
      }

      selectedCat.sub[path.sub].productsGroup.push(newGroup);

      setselectedCat({ ...selectedCat });
      setInitialData({ ...initialData, [`${newGroup._uid}`]: newGroup.name });
      setOpenList({ ...openList, [`${newGroup._uid}`]: true })
    }
  }

  const remove = () => {
    // if its sub category
    if (open.delete.path === 'sub') {
      setselectedCat({ ...selectedCat, sub: selectedCat.sub.filter(subC => subC._uid != open.delete.node) })

      setOpen({ delete: false })
    } else {
      const { sub, group } = open.delete.path;
      const node = open.delete.node;
      let selectedSubIndex = selectedCat.sub.findIndex(subC => subC._uid == sub);

      // if its product
      if (open.delete.path.group) {

        let selectedGroupIndex = selectedCat.sub[selectedSubIndex].productsGroup.findIndex(pGroup => pGroup._uid == group);
        let selectedProductIndex = selectedCat.sub[selectedSubIndex].productsGroup[selectedGroupIndex].products.findIndex(p => p._uid == node);
        selectedCat.sub[selectedSubIndex].productsGroup[selectedGroupIndex].products.splice(selectedProductIndex, 1)

        setOpen({ delete: false })
      } else {
        // if its group
        let selectedGroupIndex = selectedCat.sub[selectedSubIndex].productsGroup.findIndex(pGroup => pGroup._uid == node);
        selectedCat.sub[selectedSubIndex].productsGroup.splice(selectedGroupIndex, 1)

        setOpen({ delete: false });
      }
    }
  }

  const renderHint = () => (
    <Zoom in>
      <div className={classes.hint}>
        <CloseIcon className={classes.hint__icon} onClick={() => setViewHint(false)} />

        <div className={classes.hint__title}>
          <EmojiObjectsIcon />
          <Typography variant="subtitle2">Tip alert title</Typography>
        </div>

        <div className={classes.hint__body}>
          <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue neque gravida in fermentum. </Typography>
        </div>
      </div>
    </Zoom>
  )

  return (
    <Slide in direction="left">
      <div className={classes.categoryEdit}>
        <div className={classes.categoryEdit__header}>
          <div className={classes.categoryEdit__header_title}>
            <Typography variant="h5">Edit Category</Typography>
          </div>

          <div className={classes.categoryEdit__header_controls}>
            <div className={classes1.modal__formActions}>
              <Button
                variant="outlined"
                onClick={() => history.push("/admin/administration/category-profiles")}
                className={classes.cancel}
              >
                Cancel
                </Button>
              <Button onClick={() => history.push("/admin/administration/category-profiles")} variant="contained" className={classes1.submit}>
                Apply Changes
                </Button>
            </div>
          </div>
        </div>

        {viewHint && renderHint()}
        <CategoriesForm
          // toggle={toggle}
          selectedCat={selectedCat}
          open={open}
          setOpen={setOpen}
          initialData={initialData}
          setInitialData={setInitialData}
          add={addSubCategory}
          update={update}
          openList={openList}
          setOpenList={setOpenList}
        />

        {/* Delete Existing Category */}
        {open.delete?.state && (
          <DeleteCategory
            submit={remove}
            title={`Delete ${open.delete.msgModal} ?`}
            message={`If you proceed, you will lose the data of this ${open.delete.msgModal}.`}
            handleClose={() => {
              setOpen({ delete: false });
            }}
          />
        )}
      </div>
    </Slide>
  );
}


export default EditCategory
