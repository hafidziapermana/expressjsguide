$(document).ready(function(){
    $('a[data-track]').click(function(e){
        $target = $(e.currentTarget)
        _gaq.push(['_trackEvent', $target.attr('data-track'), $target.attr('href')])
        return true
    })
    var showSample = function() {
        $('#leanpub-main').removeClass('hide')
    }
    $('.read-sample').click(showSample)
    $('#leanpub-toc a').click(showSample)
    var firstCta = new Cohorts.Test({
        name: 'pro-vs-team-cta',
        sample: 1, // we want to include all visitors in the test
        cohorts: {
            pro: {
                onChosen: function() {
                    $('.buy-team-cta').addClass('hide')
                    $('.buy-pro-cta').removeClass('hide')
                }
            },
            team: {
                onChosen: function() {
                    $('.buy-team-cta').removeClass('hide')
                    $('.buy-pro-cta').addClass('hide')
                }
            }
        }
    });

    $('a').click(function() {
        firstCta.event('Clicked on link');
    });

})
