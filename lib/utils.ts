const HW_BASE = "https://a.hwstatic.com/image/upload";
const HW_PROP = "/v1/propertyimages/9/93936";

export function hwUrl(id: string, width = 800): string {
  return `${HW_BASE}/f_auto,q_auto,w_${width}${HW_PROP}/${id}.jpg`;
}
