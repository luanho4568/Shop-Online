import actionTypes from "./actionTypes";
import {
    createNewProductService,
    deleteProductService,
    editProductService,
    getBrand,
    getAllCode,
    getAllProductByCategory,
} from "../../services/userService";
import { toast } from "react-toastify";

export const fetchCategoryStart = () => {
    return async (dispatch) => {
        try {
            const res = await getAllCode("CATEGORY");
            if (res && res.errCode === 0) {
                dispatch(fetchCategorySuccess(res.data));
            } else {
                dispatch(fetchCategoryFailed());
            }
        } catch (error) {
            dispatch(fetchCategoryFailed());
        }
    };
};
export const fetchCategorySuccess = (CategoryData) => ({
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    data: CategoryData,
});

export const fetchCategoryFailed = () => ({
    type: actionTypes.FETCH_CATEGORY_FAILED,
});

export const fetchBrandStart = (data) => {
    return async (dispatch) => {
        try {
            const res = await getBrand(data);
            if (res && res.errCode === 0) {
                dispatch(fetchBrandSuccess(res.data));
            } else {
                dispatch(fetchBrandFailed());
            }
        } catch (error) {
            dispatch(fetchBrandFailed());
        }
    };
};
export const fetchBrandSuccess = (BrandData) => ({
    type: actionTypes.FETCH_BRAND_SUCCESS,
    data: BrandData,
});

export const fetchBrandFailed = () => ({
    type: actionTypes.FETCH_BRAND_FAILED,
});

export const createNewProduct = (data, category_key) => {
    return async (dispatch) => {
        try {
            const res = await createNewProductService(data);
            if (res && res.errCode === 0) {
                dispatch(createProductSuccess());
                toast.success(res.errMessage);
                dispatch(fetchAllProductStart(category_key));
            } else {
                toast.error(res.errMessage);
                dispatch(createProductFailed());
            }
        } catch (error) {
            toast.error("Create a new product failed!");
            dispatch(createProductFailed());
            console.log("createProductFailed", error);
        }
    };
};

export const createProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
});

export const createProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILED,
});

export const fetchAllProductStart = (category_key) => {
    return async (dispatch) => {
        try {
            const res = await getAllProductByCategory(category_key);
            if (res && res.errCode === 0) {
                dispatch(fetchAllProductSuccess(res.data));
            } else {
                toast.error(res.errMessage);
                dispatch(fetchAllProductFailed());
            }
        } catch (error) {
            toast.error("Fetch all Product failed!");
            dispatch(fetchAllProductFailed());
            console.log("fetchAllProductFailed", error);
        }
    };
};

export const fetchAllProductSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
    data,
});

export const fetchAllProductFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCT_FAILED,
});

export const deleteOneProduct = (data, category_key) => {
    return async (dispatch) => {
        try {
            const res = await deleteProductService(data.id);
            if (res && res.errCode === 0) {
                dispatch(deleteProductSuccess());
                toast.success(res.errMessage);
                dispatch(fetchAllProductStart(category_key));
            } else {
                toast.error(res.errMessage);
                dispatch(deleteProductFailed());
            }
        } catch (error) {
            toast.error("Delete a Product failed!");
            dispatch(deleteProductFailed());
            console.log("DeleteProductFailed", error);
        }
    };
};

export const deleteProductSuccess = (data) => ({
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    data,
});

export const deleteProductFailed = () => ({
    type: actionTypes.DELETE_PRODUCT_FAILED,
});

export const editOneProduct = (data, category_key) => {
    return async (dispatch) => {
        try {
            const res = await editProductService(data);
            if (res && res.errCode === 0) {
                dispatch(editProductSuccess());
                toast.success(res.errMessage);
                dispatch(fetchAllProductStart(category_key));
            } else {
                toast.error(res.errMessage);
                dispatch(editProductFailed());
            }
        } catch (error) {
            toast.error("Update a Product failed!");
            dispatch(editProductFailed());
            console.log("UpdateProductFailed", error);
        }
    };
};

export const editProductSuccess = () => ({
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
});

export const editProductFailed = () => ({
    type: actionTypes.EDIT_PRODUCT_FAILED,
});