const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
    SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

    //user
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
    PROCESS_LOGOUT: "PROCESS_LOGOUT",

    //admin
    FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
    FETCH_GENDER_FAILED: "FETCH_GENDER_FAILED",

    FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
    FETCH_ROLE_FAILED: "FETCH_ROLE_FAILED",

    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAILED: "CREATE_USER_FAILED",

    EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
    EDIT_USER_FAILED: "EDIT_USER_FAILED",

    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILED: "DELETE_USER_FAILED",

    FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
    FETCH_ALL_USER_FAILED: "FETCH_ALL_USER_FAILED",


    // Product
    FETCH_CATEGORY_SUCCESS: "FETCH_CATEGORY_SUCCESS",
    FETCH_CATEGORY_FAILED: "FETCH_CATEGORY_FAILED",

    CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
    CREATE_PRODUCT_FAILED: "CREATE_PRODUCT_FAILED",

    EDIT_PRODUCT_SUCCESS: "EDIT_PRODUCT_SUCCESS",
    EDIT_PRODUCT_FAILED: "EDIT_PRODUCT_FAILED",

    DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAILED: "DELETE_PRODUCT_FAILED",

    FETCH_ALL_PRODUCT_SUCCESS: "FETCH_ALL_PRODUCT_SUCCESS",
    FETCH_ALL_PRODUCT_FAILED: "FETCH_ALL_PRODUCT_FAILED",

    FETCH_PRODUCTS_PHONE_SUCCESS : "FETCH_PRODUCTS_PHONE_SUCCESS",
    FETCH_PRODUCTS_PHONE_FAILED : "FETCH_PRODUCTS_PHONE_FAILED",

    FETCH_PRODUCTS_LAPTOP_SUCCESS : "FETCH_PRODUCTS_LAPTOP_SUCCESS",
    FETCH_PRODUCTS_LAPTOP_FAILED : "FETCH_PRODUCTS_LAPTOP_FAILED",
    
    FETCH_PRODUCTS_TABLET_SUCCESS : "FETCH_PRODUCTS_TABLET_SUCCESS",
    FETCH_PRODUCTS_TABLET_FAILED : "FETCH_PRODUCTS_TABLET_FAILED",

    FETCH_BRAND_SUCCESS: "FETCH_BRAND_SUCCESS",
    FETCH_BRAND_FAILED: "FETCH_BRAND_FAILED",

    FETCH_DETAIL_PRODUCT_SUCCESS: "FETCH_DETAIL_PRODUCT_SUCCESS",
    FETCH_DETAIL_PRODUCT_FAILED: "FETCH_DETAIL_PRODUCT_FAILED",
});

export default actionTypes;
