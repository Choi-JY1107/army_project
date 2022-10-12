package outManegement.backend.repository;

import outManegement.backend.dao.outlist.Out;

import java.util.List;
import java.util.Optional;

public interface OutRepository {
    public Long save(Out out);
    public Optional<Out> findById(Long id);
    public List<Out> findAllMember();
    public void clearAll();
    public void deleteById(Long id);
}
