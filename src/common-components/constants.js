export const FORM_DETAILS = Object.freeze({
    TITLE: 'Customer Form Details',
    SUCCESS: 'Customer Details Added Successfully'
});

export const CUSTOMER_DETAILS = Object.freeze({
    TITLE: 'Customer Details',
});

export const CUSTOMER_REPORT_DATA = Object.freeze({
    TITLE: 'Customer Details List',
    COLUMN_DEF: [
        {
            headerName: 'Name',
            field: 'name',
            width: 180,
            sortingOrder: ['asc', 'desc'],
            filterParams: {
              caseSensitive: true
            },
            tooltipField: 'name',
            sortable: true,
        },
        {
            headerName: 'Age',
            field: 'age',
            width: 120,
            sortingOrder: ['asc', 'desc'],
            filterParams: {
              caseSensitive: true
            },
            tooltipField: 'age',
            sortable: true
        },
        {
            headerName: 'Gender',
            field: 'gender',
            width: 120,
            sortingOrder: ['asc', 'desc'],
            filterParams: {
              caseSensitive: true
            },
            tooltipField: 'gender',
            sortable: true
        },
        {
            headerName: 'Address',
            field: 'address',
            width: 200,
            sortingOrder: ['asc', 'desc'],
            filterParams: {
              caseSensitive: true
            },
            tooltipField: 'address',
            sortable: true
        },
        {
            headerName: 'ProfilePic',
            field: 'profilePic',
            width: 120,
            sortingOrder: ['asc', 'desc'],
            filterParams: {
              caseSensitive: true
            },
            cellRenderer: (params) => {
                return `<img style="height: 100%" src=${params.value} alt=${params.value} />`
            },
            tooltipField: 'profilePic'
        },
    ]
});