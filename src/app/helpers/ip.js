// app/helpers/ip.js
export function getIPFromRequest(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const ips = forwarded.split(',').map((ip)=>ip.trim()).filter(Boolean);
    return ips[ips.length - 1] || request.ip || 'unknown';
  }
  return request.headers.get('x-real-ip') || 'unknown';
}
