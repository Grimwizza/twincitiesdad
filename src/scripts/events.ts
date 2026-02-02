document.addEventListener('astro:page-load', () => {
    initEvents();
});

// Fallback for initial load if view transitions aren't used
if (document.readyState === 'complete') {
    initEvents();
} else {
    document.addEventListener('DOMContentLoaded', initEvents);
}

function initEvents() {
    const container = document.querySelector('.events-page-container');
    if (!container) return;

    // State
    let currentFilter = 'all';
    let currentRegion = 'all';
    let kidFriendlyOnly = false;
    let freeOnly = false;
    // let currentView = 'list'; // Derived from DOM state usually, but track if needed

    // Elements
    const filterBtns = document.querySelectorAll('.filter-pill');
    const kidToggle = document.getElementById('kid-friendly-toggle') as HTMLInputElement;
    const freeToggle = document.getElementById('free-only-toggle') as HTMLInputElement;
    const viewBtns = document.querySelectorAll('.view-toggle-btn');
    const listView = document.getElementById('list-view');
    const calendarView = document.getElementById('calendar-view');
    const mapView = document.getElementById('map-view');

    // Check URL for initial view
    const urlParams = new URLSearchParams(window.location.search);
    const initialView = urlParams.get('view');

    if (initialView === 'calendar' && calendarView && listView && mapView) {
        calendarView.style.display = 'block';
        listView.style.display = 'none';
        mapView.style.display = 'none';
        // Set active button
        viewBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-view="calendar"]')?.classList.add('active');
    }
    const eventCards = document.querySelectorAll('.event-card');
    const shareBtns = document.querySelectorAll('.share-btn');

    // Map Elements
    const mapRegions = document.querySelectorAll('.region-group');
    const mapResetBtn = document.getElementById('reset-map-filter');

    // Empty state element
    const filteredEmptyState = document.getElementById('filtered-empty-state');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    // Filtre Logic
    function applyFilters() {
        // Stick selection style
        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 1. Filter List View
        let visibleCount = 0;
        eventCards.forEach(card => {
            const type = card.getAttribute('data-type');
            const region = card.getAttribute('data-region');
            const isKidFriendly = card.getAttribute('data-kid-friendly') === 'yes';
            const isFree = card.getAttribute('data-is-free') === 'yes';

            let typeMatch = currentFilter === 'all' || type === currentFilter;
            let regionMatch = currentRegion === 'all' || region === currentRegion;
            let kidMatch = !kidFriendlyOnly || isKidFriendly;
            let freeMatch = !freeOnly || isFree;

            if (typeMatch && regionMatch && kidMatch && freeMatch) {
                (card as HTMLElement).style.display = 'flex';
                visibleCount++;
            } else {
                (card as HTMLElement).style.display = 'none';
            }
        });

        // 2. Filter Calendar View (Region logic skipped for calendar as pills lack data-region currently)
        const calendarPills = document.querySelectorAll('.cal-event-pill');
        calendarPills.forEach(pill => {
            const type = pill.classList.contains('protest') ? 'protest' :
                pill.classList.contains('concert') ? 'concert' :
                    pill.classList.contains('community') ? 'community' :
                        pill.classList.contains('sports') ? 'sports' :
                            pill.classList.contains('arts') ? 'arts' : 'other';
            // Calendar filtering
            const isKidFriendly = pill.getAttribute('data-kid-friendly') === 'yes';
            const isFree = pill.getAttribute('data-is-free') === 'yes';
            // const region = pill.getAttribute('data-region'); // Not yet added

            let typeMatch = currentFilter === 'all' || type === currentFilter;
            let kidMatch = !kidFriendlyOnly || isKidFriendly;
            let freeMatch = !freeOnly || isFree;
            // let regionMatch = currentRegion === 'all' || region === currentRegion; 
            // Stick to other filters for calendar for now or if we want consistent filtering we should add region to pills later.

            if (typeMatch && kidMatch && freeMatch) {
                (pill as HTMLElement).style.display = 'block';
            } else {
                (pill as HTMLElement).style.display = 'none';
            }
        });

        // Map UI Updates
        mapRegions.forEach(group => {
            if (group.getAttribute('data-region') === currentRegion) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });

        if (currentRegion !== 'all') {
            mapResetBtn?.classList.remove('hidden');
        } else {
            mapResetBtn?.classList.add('hidden');
        }

        // Show/hide empty state based on visible count
        if (filteredEmptyState) {
            if (visibleCount === 0 && (currentFilter !== 'all' || currentRegion !== 'all' || kidFriendlyOnly || freeOnly)) {
                filteredEmptyState.style.display = 'block';
            } else {
                filteredEmptyState.style.display = 'none';
            }
        }
    }

    // Event Listeners: Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.getAttribute('data-filter') || 'all';
            applyFilters();
        });
    });

    if (kidToggle) {
        kidToggle.addEventListener('change', (e) => {
            kidFriendlyOnly = (e.target as HTMLInputElement).checked;
            applyFilters();
        });
    }

    if (freeToggle) {
        freeToggle.addEventListener('change', (e) => {
            freeOnly = (e.target as HTMLInputElement).checked;
            applyFilters();
        });
    }

    // Event Listeners: Map Region Clicks
    mapRegions.forEach(group => {
        group.addEventListener('click', () => {
            const region = group.getAttribute('data-region');
            // Toggle off if clicking active
            if (currentRegion === region) {
                currentRegion = 'all';
            } else {
                currentRegion = region || 'all';
            }
            applyFilters();

            // Scroll to list if needed
            listView?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        // Key press for accessibility
        group.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
                e.preventDefault();
                (group as HTMLElement).click();
            }
        });
    });

    mapResetBtn?.addEventListener('click', () => {
        currentRegion = 'all';
        applyFilters();
    });

    // Clear All Filters button (shown in empty state)
    clearFiltersBtn?.addEventListener('click', () => {
        currentFilter = 'all';
        currentRegion = 'all';
        kidFriendlyOnly = false;
        freeOnly = false;

        // Reset toggle UI states
        if (kidToggle) kidToggle.checked = false;
        if (freeToggle) freeToggle.checked = false;

        applyFilters();
    });

    // Event Listeners: Views
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (listView && calendarView && mapView) {
                if (view === 'list') {
                    listView.style.display = 'block';
                    mapView.style.display = 'none';
                    calendarView.style.display = 'none';
                    // Reset region when leaving map? Maybe keeps state? Let's keep state.
                } else if (view === 'calendar') {
                    listView.style.display = 'none';
                    mapView.style.display = 'none';
                    calendarView.style.display = 'block';
                } else if (view === 'map') {
                    listView.style.display = 'block'; // Show list below map
                    mapView.style.display = 'block';
                    calendarView.style.display = 'none';
                }
            }
        });
    });

    // Event Listeners: Sharing
    shareBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const target = e.currentTarget as HTMLElement;
            const shareData = {
                title: target.getAttribute('data-share-title') || 'Event',
                text: target.getAttribute('data-share-text') || 'Check out this event!',
                url: target.getAttribute('data-share-url') || window.location.href,
            };

            try {
                if (navigator.share) {
                    await navigator.share(shareData);
                } else {
                    // Fallback: Copy to clipboard
                    await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
                    const originalIcon = target.innerHTML;
                    target.innerHTML = '✅';
                    setTimeout(() => target.innerHTML = originalIcon, 2000);
                }
            } catch (err) {
                console.warn('Share failed:', err);
            }
        });
    });
}
