export const fetchData = async (range, setdata) => {
    let SHEET_ID = '1KEYgUMLX7mwkCHOA7kl_BudSYlMY6MMDfCVGkQn7uSA'
    let SHEET_TITLE = 'ganeshutsav';
    let SHEET_RANGE = range;
    let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
    await fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            const { rows, cols } = data.table;
            const col = cols.map(item => item.label);
            const result = rows.map(item => {
                let res = {};
                item.c.map((data, index) =>
                    res[col[index]] = Object.values(data)[Object.keys(data).length - 1]);
                return res;
            }
            )
            setdata(result || []);
            console.log(result || [])
        }).catch((error) => {
            console.error('Error:', error);
        });

}
