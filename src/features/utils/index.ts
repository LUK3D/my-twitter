export function extractHashtags(str: string) {
    var rgx = /#(\w+)\b/gi;
    var result = [];
    var temp;
    while (temp = rgx.exec(str)) {
        result.push(temp[1])
    }
    return result;
}