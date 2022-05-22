import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Adminstration
import Brands from "./components/adminstration/brands/Brands";
import Branches from "./components/adminstration/branches/Branches";
import SuppliersEntry from "./components/adminstration/suppliers/suppliersEntry/SuppliersEntry";
import Suppliers from "./components/adminstration/suppliers/Suppliers";
import RolesEntry from "./components/adminstration/roles/rolesEntry/RolesEntry";
import Roles from "./components/adminstration/roles/Roles";
import Users from "./components/adminstration/users/Users";
import Categories from "./components/adminstration/categories/Categories";
import EditCategory from "./components/adminstration/categories/modals/EditCategory";
// Home
import DashBoard from "./components/stats/DashBoard";

// Layout Styles
const AdminLayout = () => {
  const renderLayout = () => {
    return (
      <Switch>
        <Route path="/admin/administration/brands" component={Brands} />
        <Route path="/admin/administration/branches" component={Branches} />
        <Route path="/admin/administration/roles/entry/new" component={RolesEntry} />
        <Route path="/admin/administration/roles/entry/:id" component={RolesEntry} />
        <Route path="/admin/administration/roles" component={Roles} />
        <Route path="/admin/administration/users" component={Users} />
        <Route path="/admin/administration/suppliers/entry/new" component={SuppliersEntry} />
        <Route path="/admin/administration/suppliers/entry/:id" component={SuppliersEntry} />
        <Route path="/admin/administration/suppliers" component={Suppliers} />
        <Route path="/admin/administration/category-profiles/:id" component={EditCategory} />
        <Route path="/admin/administration/category-profiles" component={Categories} />
        <Route path="/admin/home" component={DashBoard} />
        <Redirect from="/" to="/admin/home" />
      </Switch>
    );
  };

  return <div>{renderLayout()}</div>;
};

export default AdminLayout;
