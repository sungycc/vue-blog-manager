const os = require('os');
/**
 * 获取本机IP
 *
 * @param {Boolean}  是否显示ipb6
 * @returns {Object} 包含Ip的数组
 *
 * console.log('本机ip地址(不包括Ipv6):', getLocalIps());
 * console.log('本机ip地址(包括Ipv6):', getLocalIps(true));
 */
function getLocalIps (flagIpv6) {
    var ifaces = os.networkInterfaces();
    var ips = [];
    var func = function (details) {
        if (!flagIpv6 && details.family === 'IPv6') {
            return;
        }
        ips.push(details.address);
    };
    for (var dev in ifaces) {
        ifaces[dev].forEach(func);
    }
    return ips;
}
module.exports = getLocalIps