function solution(id_list, report, k) {
  
  const uniqueReports = [...new Set(report)]
    .map(r => r.split(' '));
    
  const reportMap = uniqueReports.reduce((map, [reporter, reported]) => {
    map.set(
      reported, 
      (map.get(reported) || []).concat(reporter)
    );
    return map;
  }, new Map());
  
  const bannedUsersReporters = Array.from(reportMap.entries())
    .filter(([_, reporters]) => reporters.length >= k)
    .flatMap(([_, reporters]) => reporters);
    
  return id_list.map(id => 
    bannedUsersReporters.filter(reporter => reporter === id).length
  );
}
