export default function initPopularBrands(context) {
    // Get all brands with limited array
    // eslint-disable-next-line no-shadow
    async function fetchPopularBrands(context, brandWidth, brandHeight, arrLimited) {
        let arrResultBrand = [];
        if (arrLimited.length > 0) {
            for (let i = 0; i < arrLimited.length; i++) {
                if (arrLimited[i].length > 0) {
                    let hasNextPageBrand = false;
                    let cursorBrand = '';
                    let resultBrand = [];
                    let pageInfoBrand = [];
                    do {
                        const respond = await $.ajax({
                            url: '/graphql',
                            method: 'POST',
                            data: JSON.stringify({
                                query: `
                                query ($imgWidth: Int!, $imgHeight: Int!, $cursorBrand: String) {
                                    site {
                                        brands (first: 50, after: $cursorBrand, entityIds: [${arrLimited[i].join(',')}]) {
                                            edges {
                                                node {
                                                    entityId,
                                                    defaultImage {
                                                        url (width: $imgWidth, height: $imgHeight)
                                                    }
                                                }
                                            },
                                            pageInfo {
                                                endCursor,
                                                hasNextPage
                                            }
                                        }
                                    }
                                }
                                `,
                                variables: {
                                    imgWidth: brandWidth,
                                    imgHeight: brandHeight,
                                    cursorBrand: cursorBrand && cursorBrand !== '' ? cursorBrand : '',
                                },
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${context.graphQLToken}`,
                            },
                            xhrFields: {
                                withCredentials: true,
                            },
                        });
                        pageInfoBrand = respond?.data?.site?.brands?.pageInfo || [];
                        hasNextPageBrand = pageInfoBrand.hasNextPage;
                        cursorBrand = pageInfoBrand.endCursor;
                        resultBrand = [...resultBrand, ...respond?.data?.site?.brands?.edges] || [];
                    } while (hasNextPageBrand === true);
                    arrResultBrand = [...arrResultBrand, ...resultBrand];
                }
            }
        }
        return arrResultBrand;
    }
    // Split Array Limit
    function addToLimitedArr(arr, limit) {
        const result = arr.reduce((arrResult, item, index) => {
            const chuckIndex = Math.floor(index / limit);
            if (!arrResult[chuckIndex]) {
                // eslint-disable-next-line no-param-reassign
                arrResult[chuckIndex] = [];
            }
            arrResult[chuckIndex].push(item);
            return arrResult;
        }, []);

        return result;
    }

    const $brandScope = $('#kitchenary__featuredBrands');
    const brandId = $('._brand-logo', $brandScope);
    const arrBrandId = [];
    brandId.map((index, item) => arrBrandId.push($(item).data('brand-id')));
    const arrLimited = addToLimitedArr(arrBrandId, 50);
    const brandSize = context.brand_size.split('x');
    const brandWidth = Number(brandSize[0]) || 223;
    const brandHeight = Number(brandSize[1]) || 100;
    if (context.featured_brands_show_logo) {
        fetchPopularBrands(context, brandWidth, brandHeight, arrLimited).then(data => {
            brandId.each((index, brandItem) => {
                data.forEach(item => {
                    if ($(brandItem).data('brand-id') === item?.node?.entityId) {
                        $(brandItem).attr('src', `${item?.node?.defaultImage !== null ? item?.node?.defaultImage?.url : context.defaultBrandImage}`);
                    }
                });
            });
        });
    }
}
