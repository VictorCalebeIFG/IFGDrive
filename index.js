const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT-C0RU5nS_puPs9EnhoD-l5cvLaGe0FAw_6fTlf1_uJdUoW2J5LnuxwNswcSyW2kxZxwrgC--BPLOc/pub?output=csv';
$.ajax({
    url: csvUrl,
    dataType: 'text',
    success: function (csvData) {
        // Use o método $.csv.toArrays para analisar os dados CSV obtidos
        const rows = $.csv.toArrays(csvData);
        console.log('Dados CSV:', rows);
    },
    error: function (error) {
        console.error('Erro ao obter CSV:', error);
    }
});