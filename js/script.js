document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Tabbed panels
  document.querySelectorAll('.tabs').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tab-btn');
    var panels = tabGroup.querySelectorAll('.tab-panel');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        btn.classList.add('active');
        var panel = tabGroup.querySelector('#' + target);
        if (panel) panel.classList.add('active');
      });
    });
  });

  // News "Read More" expand/collapse
  document.querySelectorAll('.read-more[data-target]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var detail = document.getElementById(btn.getAttribute('data-target'));
      if (!detail) return;

      if (detail.classList.contains('open')) {
        detail.classList.remove('open');
        btn.innerHTML = 'Read More <span class="arrow">&#8250;</span>';
      } else {
        detail.classList.add('open');
        btn.innerHTML = 'Show Less <span class="arrow">&#8249;</span>';
      }
    });
  });

});
