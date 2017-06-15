---
layout: post
title: "Pathfinding Satisfaction"
tagline: "Using my degree to brood"
date: 2017-06-15 00:00:00
publish: true

---

I previously talked about [how engineering shaped the way I 
thought](/blog/engineers-mindset-for-life). I left one concept out for another 
post, and a year later, I'm finally getting around to writing about it.

Algorithmic searching is one of the first concepts learned in computer science, 
and it's widely applied everywhere. Obvious examples are search engines, 
locating the information you want out of the entire internet. Online dating 
apps, matching you to your soul mate from the expansive dating pool. But even 
things you might not expect like self driving cars are partially relying on 
search. In deciding how to get somewhere and avoid crashing into obstacles 
(people), they're looking at all possible paths ahead of them and finding the 
most efficient and safest path forward.

{% image /images/pathfinding/self-driving.gif "" %}

Depending on the problem space, you'll want to search differently, but however 
it's done, it's done according to an algorithm, some structured methodology.

Many of our daily life struggles can also be seen as search problems. Deciding 
where to eat for dinner. Trying different ways to reduce the mundanity of a task 
we do regularly. All of these have potential to be done better with some 
structure in our approach.

But the problem I want to focus on is one I thought a lot about over the last 
year: figuring out what to do with my life.

Generally when we look at search problems, we have one criteria to find the 
"best" for. In life, we care about many things: money, fame, love, happiness, 
etc. It's impossible to have it all: sometimes the increase of one comes at the 
cost of another. Perhaps to become happier I have to switch to a job that pays 
less.

For the sake of simplicity, I'm just going to talk about searching along one 
spectrum of my desires. In reality I'm thinking like this for several facets at 
once, making trade-offs between which I want more at any given moment.

The area I currently care most about is satisfaction. This could be the subject 
of a whole other post, but I define it as a combination of happiness and 
[meaning](http://www.theatlantic.com/health/archive/2013/01/theres-more-to-life-than-being-happy/266805/){:target="_blank"}. 
Happiness by itself is transient and fluctuating, satisfaction is the enduring 
baseline I fluctuate along. This is not a rigorous definition, just a hand wavy 
measurement based on how I feel relative to prior satisfaction levels. We can 
graph it simplistically on an axis of high to low over time.

{% image /images/pathfinding/satisfaction.png "" %}

For this to make sense as a search problem, we have to look at a third axis that 
we actually make decisions on: choice. We consider all the ways we could think 
and do things differently with our lives to try and increase our satisfaction.

{% image /images/pathfinding/3d-satisfaction.png "" %}

But this graph is too complicated to read, and I'm too lazy to make more like 
it, so we'll just look at it in 2D, with choice affecting satisfaction. Every 
moment in time there exists another one of these graphs.

{% image /images/pathfinding/choice.png "" %}

We'll say that choices in close proximity to our current location are ones that 
don't require much friction, ones that we make by default. A simple search 
algorithm we could apply is hill climbing, which just takes the closest choice 
that seems to trend upwards until the natural conclusion.

{% image /images/pathfinding/hill-climbing.gif "" %}

Applied to our life, this could mean progressing things we're familiar with, 
doing things that we already know bring us satisfaction, and maintaining the way 
we think about things. Overall not a bad approach, but it can only get us to a 
local optimum. Everest could be in the distance and we'd never know since it's 
out of sight.

{% image /images/pathfinding/everest.png "" %}

I personally am not okay with the local optimum, I'm curious to see if there's 
more. But as I'd [previously pondered](/blog/imperfection), how do I find the 
balance of making changes to try for more with accepting things the way they 
are?  It's infeasible to constantly revamp my whole life to try everything else 
that's out there. And to try for the potential of something better, there's also 
the risk of something worse, so I don't want too much of that if life already 
seems satisfactory.

Enter simulated annealing. An algorithm made specifically for scenarios like 
this, where the options are infinite, and we don't have time to try them all.

Simulated annealing is inspired by the concept of annealing &mdash; superheating 
metal to make it soft enough to shape. At peak temperature, the metal is very 
malleable and you can twist and turn it however you like. As it cools over time, 
it becomes harder to bend, but you should be closer to your vision, and 
eventually you can only make minute adjustments.

Translated to an algorithm, what we do is hill climb as usual, but if we're not 
that far along the hill, sometimes we make random leaps to elsewhere. As we get 
closer to an optimum, we decrease the probability of making random leaps, or 
make smaller leaps.

{% image /images/pathfinding/sa.gif "" %}

This does put us at risk of ending up at an even lower local optimum from the 
random jumps, so in programming we run the algorithm many times and take the 
best from the batch. It doesn't guarantee the best solution, but 
probabilistically it's more likely to get it in a set of data that's too large 
to search completely.

In life, we may not be able to do multiple runs and retries, but the graph is 
pretty damn long time-wise, and there are many optimums at similar levels. We 
may not be able to return to exactly the same point we were at before if we drop 
substantially, but we can apply what we learned that increased satisfaction 
prior and see if it gets us close.

So how do we apply this algorithm to life? When I find my life pretty optimal, 
I'm now at peace with not making any drastic changes. As the old adage goes, if 
it ain't broke, don't fix it. However, I do intentionally inject small changes 
that introduce aspects of randomness. Maybe learn something new, or meet some 
new people, or perhaps both through something like [Learning 
Night](http://learningnight.com/){:target="_blank"} (shameless plug). Things 
that could potentially open the doors to something more. Sometimes when an 
opportunity presents itself but I'm feeling too in my comfort zone, thinking 
about this concept helps me push past the initial discomfort. Who knows what may 
result.

{% image /images/pathfinding/small-jump.png "" %}

But this doesn't only apply when the times are good. Sometimes life throws 
curveballs at us, and a change happens that's out of our control. Perhaps a 
death, a loss of job, or a breakup.  Sheryl Sandberg in her book Option B talks 
about how [three 
P's](http://www.businessinsider.com/sheryl-sandberg-martin-seligmans-3-ps-helped-me-cope-with-my-husbands-death-2016-5){:target="_blank"} 
determine our ability to deal with setbacks: personalization, pervasiveness, 
permanence.

I found in states of adversity, when nothing I did seemed to reduce the sadness, 
what prevented me from completely losing hope and reduced the permanence was 
thinking about drastic changes I could attempt. Even if they didn't change my 
state of being, harnessing the feelings was at least an opportunity to fix 
things about myself I normally wouldn't make an effort to. In some such moments, 
indeed changes resulted in me not only getting out of the despair but to an even 
better place than I started.

{% image /images/pathfinding/big-jump.png "" %}

By thinking in terms of methodical searching like this, I find myself pushed to 
try new things, while also maintaining acceptance of what's good in my life. And 
when things get bad, it has helped me to ameliorate the situation.

If I keep with this mentality, will I ever reach the global optimum? I don't 
know. I don't even know if such a thing exists. But I know that even just the 
process of trying for more in itself has been rewarding.

