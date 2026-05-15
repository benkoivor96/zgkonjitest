// ── ZKS CMS Preview Template ──────────────────────────────────────
// Prikazuje vijest u CMS editoru gotovo identično pravoj stranici.

var VijestPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Naslov vijesti';
    var body = this.props.widgetFor('body');
    var imageRaw = entry.getIn(['data', 'image']);
    var imageAsset = imageRaw ? this.props.getAsset(imageRaw) : null;
    var image = imageAsset ? imageAsset.toString() : null;
    var dateRaw = entry.getIn(['data', 'date']);
    var category = entry.getIn(['data', 'category']);
    var discipline = entry.getIn(['data', 'discipline']);

    var months = ['siječnja','veljače','ožujka','travnja','svibnja','lipnja','srpnja','kolovoza','rujna','listopada','studenoga','prosinca'];
    var dateStr = '';
    if (dateRaw) {
      var d = new Date(dateRaw);
      if (!isNaN(d)) dateStr = d.getDate() + '. ' + months[d.getMonth()] + ' ' + d.getFullYear() + '.';
    }

    var categoryLabels = { najave: 'Najave', vijesti: 'Vijesti', rezultati: 'Rezultati' };
    var disciplineLabels = { preponsko: 'Preponsko jahanje', dresurno: 'Dresurno jahanje', daljinsko: 'Daljinsko jahanje', vise: 'Više disciplina' };

    return h('div', { style: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", color: '#2d3748', background: '#fff', minHeight: '100vh' }},

      // Hero
      h('div', { style: { background: '#0f2240', padding: '3rem 2rem 2.5rem', textAlign: 'center' }},
        h('div', { style: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}, 'Naslovnica › Vijesti › Vijest'),
        h('h1', { style: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', fontWeight: 700, lineHeight: 1.15, margin: 0 }}, title)
      ),

      // Article
      h('div', { style: { padding: '3rem 2rem 5rem' }},
        h('div', { style: { maxWidth: '760px', margin: '0 auto' }},

          // Meta
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }},
            dateStr && h('span', { style: { fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}, dateStr),
            category && h('span', { style: { fontSize: '0.65rem', fontWeight: 700, color: '#1b3a6b', background: '#e6eef8', padding: '0.25rem 0.6rem', borderRadius: '3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}, categoryLabels[category] || category),
            discipline && h('span', { style: { fontSize: '0.65rem', fontWeight: 700, color: '#1b3a6b', background: '#e6eef8', padding: '0.25rem 0.6rem', borderRadius: '3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}, disciplineLabels[discipline] || discipline)
          ),

          // Image
          image && h('div', { style: { borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem' }},
            h('img', { src: image, alt: title, style: { width: '100%', height: 'auto', display: 'block' }})
          ),

          // Content
          h('div', { style: {
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: '#374151',
          }}, body)
        )
      )
    );
  }
});

// Učitaj Google Fontove u preview iframe
CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@0,400;0,600;0,700&display=swap');

// Registriraj preview za vijesti
CMS.registerPreviewTemplate('vijesti', VijestPreview);
