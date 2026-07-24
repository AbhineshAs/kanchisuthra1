export const productCatalog = [
    {
        id: "p1",
        handle: "kanjivaram-golden-mustard",
        title: "Royal Golden Mustard Kanjivaram Silk Saree",
        price: 23000,
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>A masterpiece of handloom heritage, this <strong>Royal Golden Mustard Kanjivaram Silk Saree</strong> is hand-woven by master weavers using traditional <strong>Korvai weaving techniques</strong>. Featuring pure 100% mulberry silk, intricate peacock and floral gold zari motifs, and a contrasting rich crimson border.</p><ul><li><strong>Fabric:</strong> 100% Pure Mulberry Silk (Silk Mark Certified)</li><li><strong>Zari:</strong> Tested Gold Zari</li><li><strong>Weaving Technique:</strong> 3-Shuttle Interlocking Korvai</li><li><strong>Origin:</strong> Handwoven in Kanchipuram, Tamil Nadu</li><li><strong>Care:</strong> Dry Clean Only. Store in a breathable cotton saree bag.</li></ul>`
    },
    {
        id: "p2",
        handle: "vermilion-red-kanjivaram",
        title: "Vermilion Crimson Red Kanjivaram Zari Saree",
        price: 28500,
        images: [
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Celebrated for sacred bridal ceremonies, this <strong>Vermilion Crimson Red Kanjivaram Saree</strong> features opulent sacred temple pallu design, heavy zari work on the borders, and an uncompromised lustrous silk body.</p><ul><li><strong>Fabric:</strong> Pure Mulberry Silk</li><li><strong>Zari:</strong> Premium Gold Zari</li><li><strong>Occasion:</strong> Bridal, Muhūrta, Wedding Ceremonies</li><li><strong>Care:</strong> Dry Clean Only</li></ul>`
    },
    {
        id: "p3",
        handle: "emerald-korvai-silk",
        title: "Deep Emerald Green Korvai Silk Saree",
        price: 25000,
        images: [
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Radiating timeless South Indian royalty, this <strong>Deep Emerald Green Korvai Silk Saree</strong> showcases rich contrast ruby borders, traditional elephant and rudraksha motifs, and a luxurious heavy pallu.</p><ul><li><strong>Fabric:</strong> 100% Pure Mulberry Silk</li><li><strong>Border:</strong> Contrast Ruby Red Korvai Border</li><li><strong>Care:</strong> Dry Clean Only</li></ul>`
    },
    {
        id: "p4",
        handle: "midnight-purple-kanjivaram",
        title: "Midnight Purple Gold Zari Kanjivaram",
        price: 31000,
        images: [
            "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>An extraordinary evening heirloom saree featuring deep royal purple silk, interwoven with dense golden zari lattice patterns and traditional Mayilkan borders.</p>`
    },
    {
        id: "p5",
        handle: "champagne-tissue-silk",
        title: "Luminous Champagne Gold Tissue Silk Saree",
        price: 26000,
        images: [
            "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Woven with ultra-fine metallic gold threads throughout the warp and weft, creating a translucent, shimmering drape of weightless sophistication.</p>`
    },
    {
        id: "p6",
        handle: "pastel-mint-organza",
        title: "Pastel Mint Floral Embroidered Organza Silk",
        price: 18500,
        images: [
            "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Feather-light and modern, this Pastel Mint Organza Silk Saree features subtle gold zari borders paired with delicate hand-embroidered floral creepers.</p>`
    },
    {
        id: "p7",
        handle: "pure-silk-veshti-set",
        title: "Pure Mulberry Silk Veshti with Mayilkan Zari Border",
        price: 12500,
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Crafted for South Indian grooms and ceremonial dignity, this Pure Mulberry Silk Veshti features traditional Mayilkan gold zari borders and matching Angavastram.</p>`
    },
    {
        id: "p8",
        handle: "kanchi-silk-cotton-mustard",
        title: "Kanchi Silk Cotton Mustard Saree",
        price: 8500,
        images: [
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Blending breathable organic cotton with the subtle sheen of pure silk, featuring traditional Kanchi temple borders.</p>`
    }
];

export function getProductByHandle(handle) {
    const found = productCatalog.find((p) => p.handle === handle);
    if (found) return found;

    // Fallback dynamic product generator
    const cleanTitle = handle
        ? handle.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : "Handloom Heritage Saree";

    return {
        id: "gen-" + handle,
        handle: handle,
        title: cleanTitle,
        price: 24500,
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
        ],
        descriptionHtml: `<p>Authentic <strong>${cleanTitle}</strong> handwoven by master artisans in South India. Features 100% pure silk yarns, intricate traditional zari motifs, and a graceful, long-lasting drape.</p><ul><li><strong>Fabric:</strong> Pure Handloom Silk</li><li><strong>Zari:</strong> Tested Gold Zari</li><li><strong>Origin:</strong> Kanchipuram, Tamil Nadu</li><li><strong>Care:</strong> Dry Clean Only</li></ul>`
    };
}
