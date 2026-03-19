function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    
    if (str1.length !== str2.length) {
        return false;
    }
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');
    return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent"));
